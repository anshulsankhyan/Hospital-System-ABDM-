package com.example.HAD.patientregistration.bean;

import org.springframework.beans.factory.annotation.Value;

public class Employee {
	

	private String clientId;
	
	private String clientSecret;

	public String getClientId() {
		return clientId;
	}

	public void setClientId(String clientId) {
		this.clientId = clientId;
	}

	public String getClientSecret() {
		return clientSecret;
	}

	public void setClientSecret(String clientSecret) {
		this.clientSecret = clientSecret;
	}
	
}
