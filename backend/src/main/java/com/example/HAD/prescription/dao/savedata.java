package com.example.HAD.prescription.dao;
import com.example.HAD.prescription.bean.MedicalRecords;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface savedata extends JpaRepository<MedicalRecords, Integer> {

    MedicalRecords findByPatientId(String requestId);


}
