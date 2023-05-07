package com.example.HAD.prescription.services;

import com.example.HAD.prescription.bean.MedicalRecords;
import com.example.HAD.prescription.bean.patientIDRes;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface Save {

    String  savePres(MedicalRecords obj);



    List<MedicalRecords> findAllByPatientId(String object);

}
