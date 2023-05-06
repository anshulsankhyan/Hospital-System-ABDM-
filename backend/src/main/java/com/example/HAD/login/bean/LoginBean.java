package com.example.HAD.login.bean;

import com.example.HAD.admin.doctor.docbean;

import javax.persistence.*;

@Entity
public class LoginBean {

	@Id
	private String id;

	public docbean getBean() {
		return bean;
	}

	public void setBean(docbean bean) {
		this.bean = bean;
	}


	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	private String password;

	    public String getPassword() {
	        return password;
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


	@OneToOne(mappedBy = "login", cascade = CascadeType.ALL, orphanRemoval = true)
	private docbean bean;


	public LoginBean() {
	}

	private String type;

	public LoginBean(String id, String password, String type) {
		this.id = id;
		this.password = password;
		this.type = type;
	}
}
