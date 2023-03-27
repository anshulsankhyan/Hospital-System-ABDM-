package com.example.HAD;

public class Modes {
	private String requestId="";
	
	private String timestamp= "";
	
	private Query query;

	public String getRequestId() {
		return requestId;
	}

	public String getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}

	public void setRequestId(String requestId) {
		this.requestId = requestId;
	}

	

	public Query getQuery() {
		return query;
	}

	public void setQuery(Query query) {
		this.query = query;
	}

	
	
}
