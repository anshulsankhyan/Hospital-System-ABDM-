package com.example.HAD;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
@Component

public interface TransactionIdRepository
    extends JpaRepository<TransactionId, Integer> {
	
	TransactionId findByAbhaId(String requestId);

	TransactionId findByRequestId(String object);
	
	
}

