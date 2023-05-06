package com.example.HAD.prescription.services;

import com.example.HAD.prescription.bean.MedicalRecords;
import com.example.HAD.prescription.bean.patientIDRes;
import org.springframework.http.ResponseEntity;

public interface Save {

    String  savePres(MedicalRecords obj);

    ResponseEntity<MedicalRecords> showPres(patientIDRes object);
}
