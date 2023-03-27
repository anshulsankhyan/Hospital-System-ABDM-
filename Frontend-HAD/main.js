function onPatientRegistrationLoad() {
    let abhaVeri = document.getElementById("abhaVeri");
    let otpVeri = document.getElementById("otpVeri")
    let abhaId;

    abhaVeri.onsubmit = function(event) {
        event.preventDefault();
        abhaId = document.getElementById("abhaId").value;

        let verify = {
            "requestId": "",
            "timestamp": "", 
            "query": {
                "id": abhaId,
                "purpose": "KYC_AND_LINK",
				"authMode":"MOBILE_OTP",
                "requester": {
                    "type": "HIP",
                    "id": "919"
                }
            }
        }
        // let today = new Date().toISOString().slice(0, 10);

        fetch("http://localhost:8080/otp", {
            method: "POST",
            body: JSON.stringify(verify),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
            .then(response => {
                if (response.ok) {
                    fetch("http://localhost:8080/get-otp", {
                        method: "POST",
                        body: JSON.stringify(verify),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                        }
                    })
                        .then(response => {
                            if (response.ok) alert("OTP SENT!");
                            else alert("We are having trouble generating OTP");
                        })
                }
                else alert("INVALID ABHA ID");
            })

    }

    otpVeri.onsubmit = function(event) {
        event.preventDefault();
		var x = document.getElementById("loader");
		x.style.display = "block";
        otp = document.getElementById("otp").value; 

        let otpVerify = {
            "requestId": "",
            "timestamp": "",
            "transactionId": "",
            "abhaId": abhaId,
            "credential": {
                "authCode": otp
            }
        }

        fetch("http://localhost:8080/get-demographics", {
            method: "POST",
            body: JSON.stringify(otpVerify),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then(response => {
            if (response.ok) {
				
				var intervalId = window.setInterval(function(){
					console.log("hi");					
					fetch("http://localhost:8080/get-demographic", {
						method: "POST",
						body: JSON.stringify({
                        abhaId: abhaId
						}),
						headers: {
                        "Content-type": "application/json; charset=UTF-8",
						}
					})
                    .then(response => {
						if(response.ok) {
							clearInterval(intervalId)
							x.style.display = "none";
							return response.json();
						}
                        
                    })
                    .then(data => {
                        
                        const { elements } = document.querySelector(".demographic");
                        // .demographic is a class in the patient demographic form
                        for (const [ key, value ] of Object.entries(data) ) {
                            const field = elements.namedItem(key);
                            field && (field.value = value);
                        }
                    })
				}, 5000);
				
				
				
				
                
            }
            else alert("INVALID ABHA ID");
        })
    }
}