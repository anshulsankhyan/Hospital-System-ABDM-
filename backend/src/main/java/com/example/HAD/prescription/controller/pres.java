package com.example.HAD.prescription.controller;

//import com.example.HAD.AbhaIDRequest;
//import com.example.HAD.PatientDemographicBean;
//import com.example.HAD.login.bean.loginbean;
import com.example.HAD.prescription.bean.MedicalRecords;
import com.example.HAD.prescription.bean.patientIDRes;
import com.example.HAD.prescription.services.Save;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
public class pres {

    @Autowired
    Save SavePres;



    @CrossOrigin (origins = "*")
    @PostMapping("/doctor/saveRecord")
    public String Savepres (@RequestBody MedicalRecords object) {

        return SavePres.savePres(object);

    }


    @CrossOrigin(origins = "*")
    @PostMapping("/doctor/getRecord")
    public ResponseEntity<MedicalRecords> getdempgraphic(@RequestBody patientIDRes object) {

        return SavePres.showPres(object);
    }

}
