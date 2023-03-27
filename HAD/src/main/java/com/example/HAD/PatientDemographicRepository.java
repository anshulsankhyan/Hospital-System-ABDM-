package com.example.HAD;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
@Component

public interface PatientDemographicRepository
    extends JpaRepository<PatientDemographicBean, Integer> {
	
	PatientDemographicBean findByAbhaId(String requestId);

//	PatientDemographicBean findByRequestId(String object);
	
	
}

