package com.example.HAD;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import reactor.core.publisher.Mono;

@RestController

public class Controller {

	@Autowired
	private ModesRepository modesRepository;

	@Autowired
	private TransactionIdRepository transactionIdRepository;
	
	@Autowired
	PatientDemographicRepository patientDemographicRepository;

	@Autowired
	WebClient webclient;
	
	String auth="Authorization";
	String id="X-CM-ID";
	String idValue="sbx";
	
	@CrossOrigin(origins = "*")
	@PostMapping("/get-demographic")
	public ResponseEntity<PatientDemographicBean> getdempgraphic(@RequestBody AbhaIDRequest object) {

		PatientDemographicBean bean=new PatientDemographicBean ();
		
		 bean= patientDemographicRepository.findByAbhaId(object.getAbhaId());
		 
		 if(bean!=null)
		 {
		 return new ResponseEntity<PatientDemographicBean>(bean, HttpStatus.OK);
		 }
		 else 
			 return new ResponseEntity<PatientDemographicBean>(bean, HttpStatus.BAD_REQUEST);
		
	}


	@CrossOrigin(origins = "*")
	@PostMapping("v0.5/users/auth/on-fetch-modes")
	public void getreq(@RequestBody AuthModes object) {

		System.out.print(object.getRequestId());
		List<String> list = object.getAuth().getModes();
		String modes = "";
		for (String i : list) {
			modes = modes + i + '|';

		}
		LoginModes mode = new LoginModes();
		mode.setMode(modes);
		mode.setRequestId(object.getResp().getRequestId());
		modesRepository.save(mode);
		System.out.print(object.getResp().getRequestId());
	}

	@CrossOrigin(origins = "*")
	@PostMapping("/v0.5/users/auth/on-init")
	public void getTransactionId(@RequestBody TransactionIdResponse object) {

		System.out.print(object.getRequestId());

		TransactionId bean = transactionIdRepository.findByRequestId(object.getResp().getRequestId());
		bean.setTransactionId(object.getAuth().getTransactionId());
		transactionIdRepository.save(bean);
		System.out.print(object.getResp().getRequestId());
	}

	@CrossOrigin(origins = "*")
	@PostMapping("/v0.5/users/auth/on-confirm")
	public void getDemographics(@RequestBody PatientDemographicResponse object) {

		System.out.print(object.getRequestId());
		PatientDemographicBean patientDemographicBean=new PatientDemographicBean();
		patientDemographicBean.setAbhaId(object.getAuth().getPatient().getId());
		patientDemographicBean.setDayOfBirth(object.getAuth().getPatient().getDayOfBirth());
		patientDemographicBean.setDistrict(object.getAuth().getPatient().getAddress().getDistrict());
		patientDemographicBean.setGender(object.getAuth().getPatient().getGender());
		patientDemographicBean.setLine(object.getAuth().getPatient().getAddress().getLine());
		patientDemographicBean.setMonthOfBirth(object.getAuth().getPatient().getMonthOfBirth());
		patientDemographicBean.setName(object.getAuth().getPatient().getName());
		patientDemographicBean.setPincode(object.getAuth().getPatient().getAddress().getPincode());
		patientDemographicBean.setState(object.getAuth().getPatient().getAddress().getState());
		patientDemographicBean.setYearOfBirth(object.getAuth().getPatient().getYearOfBirth());
		patientDemographicRepository.save(patientDemographicBean);
	
	}

	@GetMapping("/hi")
	public Mono<TokenResponse> sendTokenRequest() {
		Employee emp = new Employee();

		Mono<TokenResponse> res = webclient.post().uri(uriBuilder -> uriBuilder.path("gateway/v0.5/sessions").build())
				.body(Mono.just(emp), Employee.class).exchange()
				.flatMap(clientResponse -> clientResponse.bodyToMono(TokenResponse.class));
		// TokenResponse ew= res.block();
		return res;
	}
	@CrossOrigin(origins = "*")
	@PostMapping("/otp")
	public Mono<Object> sendOtpRequest(@RequestBody Modes emp) {
		System.out.print(emp.getRequestId());

   
//        DateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm'Z'"); // Quoted "Z" to indicate UTC, no timezone offset

		
		    UUID uuid = UUID.randomUUID();
	        String randomUUIDString = uuid.toString();

	        TimeZone timeZone=TimeZone.getTimeZone("UTC");
	        DateFormat dateFormat = new SimpleDateFormat("YYYY-MM-dd'T'HH:mm:ss.SSSSSS");
	        dateFormat.setTimeZone(timeZone);
	        String asISO= dateFormat.format(new Date());
	        
	        emp.setRequestId(randomUUIDString);
	        emp.setTimestamp(asISO);
	        Employee emp1 = new Employee();
	        Mono<TokenResponse> res1 = webclient.post().uri(uriBuilder -> uriBuilder.path("gateway/v0.5/sessions").build())
					.body(Mono.just(emp1), Employee.class).exchange()
					.flatMap(clientResponse -> clientResponse.bodyToMono(TokenResponse.class));
//	        
//	        WebClient client = WebClient.builder()
//					  .baseUrl("https://dev.abdm.gov.in/")
//					  .defaultHeaders( httpHeaders -> {
//						  httpHeaders.set(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE);
//				          httpHeaders.set(id, idValue);
//				          httpHeaders.set(auth, res1.block().getAccessToken());})
//					     .build();

		String requestId = emp.getRequestId();
		Mono<Object> res = webclient.post()
				.uri(uriBuilder -> uriBuilder.path("gateway/v0.5/users/auth/fetch-modes").build())
				.body(Mono.just(emp), Modes.class).exchange()
				.flatMap(clientResponse -> clientResponse.bodyToMono(Object.class));

//			while(true)
//			{
//			LoginModes modes=departmentRepository.findByRequestId(requestId);
//			if(modes!=null)
//			{
//				
//				ModeNames name=new ModeNames();
//				//name.setMode(null)
//				break;
//			}
//			}

		return res;
	}
	@CrossOrigin(origins = "*")
	@PostMapping("/get-otp")
	public Mono<Object> getOtpRequest(@RequestBody Modes emp) {
		System.out.print(emp.getRequestId());
		
		UUID uuid = UUID.randomUUID();
        String randomUUIDString = uuid.toString();
//Query query=new Query();
        TimeZone timeZone=TimeZone.getTimeZone("UTC");
        DateFormat dateFormat = new SimpleDateFormat("YYYY-MM-dd'T'HH:mm:ss.SSSSSS");
        dateFormat.setTimeZone(timeZone);
        String asISO= dateFormat.format(new Date());
        emp.setRequestId(randomUUIDString);
        emp.setTimestamp(asISO);
//        query.setAuthMode("MOBILE_OTP");
//        emp.setQuery(query);

		TransactionId transactionId = new TransactionId();
		transactionId.setAbhaId(emp.getQuery().getId());
		transactionId.setRequestId(randomUUIDString);
		transactionIdRepository.save(transactionId);
		// String requestId=emp.getRequestId();
		
		 Employee emp1 = new Employee();
//	        Mono<TokenResponse> res1 = webclient.post().uri(uriBuilder -> uriBuilder.path("gateway/v0.5/sessions").build())
//					.body(Mono.just(emp1), Employee.class).exchange()
//					.flatMap(clientResponse -> clientResponse.bodyToMono(TokenResponse.class));
//	        
//	        WebClient client = WebClient.builder()
//					  .baseUrl("https://dev.abdm.gov.in/")
//					  .defaultHeaders( httpHeaders -> {
//						  httpHeaders.set(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE);
//				          httpHeaders.set(id, idValue);
//				          httpHeaders.set(auth, res1.block().getAccessToken());})
//					     .build();

		Mono<Object> res = webclient.post().uri(uriBuilder -> uriBuilder.path("gateway/v0.5/users/auth/init").build())
				.body(Mono.just(emp), Modes.class).exchange()
				.flatMap(clientResponse -> clientResponse.bodyToMono(Object.class));

		return res;
	}
	@CrossOrigin(origins = "*")
	@PostMapping("/get-demographics")
	public Mono<Object> getDemographicsRequest(@RequestBody PatientInfoRequest emp) {
		System.out.print(emp.getRequestId());

		UUID uuid = UUID.randomUUID();
        String randomUUIDString = uuid.toString();

        TimeZone timeZone=TimeZone.getTimeZone("UTC");
        DateFormat dateFormat = new SimpleDateFormat("YYYY-MM-dd'T'HH:mm:ss.SSSSSS");
        dateFormat.setTimeZone(timeZone);
        String asISO= dateFormat.format(new Date());
		String abhaID = emp.getAbhaId();
		TransactionId trnId = transactionIdRepository.findByAbhaId(abhaID);
		String transaction = trnId.getTransactionId();
		emp.setTransactionId(transaction);
		PatientRequest request=new PatientRequest();
		request.setRequestId(randomUUIDString);
		request.setTimestamp(asISO);
		request.setTransactionId(transaction);
		Credential cred=new Credential();
		cred.setAuthCode(emp.getCredential().getAuthCode());
		request.setCredential(cred);
		
		Employee emp1 = new Employee();
//        Mono<TokenResponse> res1 = webclient.post().uri(uriBuilder -> uriBuilder.path("gateway/v0.5/sessions").build())
//				.body(Mono.just(emp1), Employee.class).exchange()
//				.flatMap(clientResponse -> clientResponse.bodyToMono(TokenResponse.class));
//        
//        WebClient client = WebClient.builder()
//				  .baseUrl("https://dev.abdm.gov.in/")
//				  .defaultHeaders( httpHeaders -> {
//					  httpHeaders.set(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE);
//			          httpHeaders.set(id, idValue);
//			          httpHeaders.set(auth, res1.block().getAccessToken());})
//				     .build();

		// String requestId=emp.getRequestId();
		Mono<Object> res = webclient.post()
				.uri(uriBuilder -> uriBuilder.path("gateway/v0.5/users/auth/confirm").build())
				.body(Mono.just(request), PatientRequest.class).exchange()
				.flatMap(clientResponse -> clientResponse.bodyToMono(Object.class));

		return res;
	}
}
