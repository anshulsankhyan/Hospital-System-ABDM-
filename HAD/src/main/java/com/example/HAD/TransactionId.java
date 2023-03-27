package com.example.HAD;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class TransactionId {
	
	 @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	 private int id;
	private String requestId;
	
	
	private String transactionId;
	
	private String abhaId;


	public String getTransactionId() {
		return transactionId;
	}


	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}


	public String getAbhaId() {
		return abhaId;
	}


	public void setAbhaId(String abhaId) {
		this.abhaId = abhaId;
	}


	public String getRequestId() {
		return requestId;
	}


	public void setRequestId(String requestId) {
		this.requestId = requestId;
	}



}
