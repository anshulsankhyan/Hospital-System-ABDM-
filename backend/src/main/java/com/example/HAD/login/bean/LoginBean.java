package com.example.HAD.login.bean;

import javax.persistence.*;

@Entity
public class LoginBean {

	@Id

	    private String id;

	    public String getId() {
	        return id;
	    }

	    private String password;

	    public String getPassword() {
	        return password;
	    }

	    public void setId(String id) {
	        this.id = id;
	    }

	    public void setPassword(String password) {
	        this.password = password;
	    }

	    public void setType(String type) {
	        this.type = type;
	    }

	    public String getType() {
	        return type;
	    }

	public LoginBean() {
	}

	private String type;

	public LoginBean(String id, String password, String type) {
		this.id = id;
		this.password = password;
		this.type = type;
	}
}
