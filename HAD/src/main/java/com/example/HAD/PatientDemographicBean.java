package com.example.HAD;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class PatientDemographicBean {
	
	 @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	 private int id;
	 private String abhaId;
		public String getAbhaId() {
		return abhaId;
	}
	public void setAbhaId(String abhaId) {
		this.abhaId = abhaId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getYearOfBirth() {
		return yearOfBirth;
	}
	public void setYearOfBirth(String yearOfBirth) {
		this.yearOfBirth = yearOfBirth;
	}
	public String getMonthOfBirth() {
		return monthOfBirth;
	}
	public void setMonthOfBirth(String monthOfBirth) {
		this.monthOfBirth = monthOfBirth;
	}
	public String getDayOfBirth() {
		return dayOfBirth;
	}
	public void setDayOfBirth(String dayOfBirth) {
		this.dayOfBirth = dayOfBirth;
	}
	public String getLine() {
		return line;
	}
	public void setLine(String line) {
		this.line = line;
	}
	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
		private String name;
		private String gender;
		private String yearOfBirth;
		private String monthOfBirth;
		private String dayOfBirth;
		private String line;
		private String district;
		private String state;
		private String pincode;

}
