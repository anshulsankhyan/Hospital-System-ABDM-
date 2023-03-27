package com.example.HAD;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
@Component

public interface ModesRepository
    extends JpaRepository<LoginModes, Integer> {
	
	 LoginModes findByRequestId(String requestId);
	
	
}

