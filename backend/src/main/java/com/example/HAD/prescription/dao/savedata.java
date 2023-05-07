package com.example.HAD.prescription.dao;
import com.example.HAD.prescription.bean.MedicalRecords;

import com.example.HAD.prescription.bean.patientIDRes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface savedata extends JpaRepository<MedicalRecords, Integer> {

//   List<MedicalRecords> findByPatientId(String requestId);

   List<MedicalRecords> findAllByPatientId(String object);


//    MedicalRecords findAll(String patientId);
//
//    MedicalRecords findAllWithPatientIdOnly(String patientId);
}
