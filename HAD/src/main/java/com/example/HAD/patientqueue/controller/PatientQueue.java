package com.example.HAD.patientqueue.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.HAD.patientqueue.bean.DoctorId;
import com.example.HAD.patientqueue.bean.PatientListResponse;
import com.example.HAD.patientqueue.bean.PatientRequestBean;
import com.example.HAD.patientqueue.service.PatientQueueService;
@Controller
public class PatientQueue {
	
	@Autowired
	PatientQueueService patientQueueService;
	@CrossOrigin(origins = "*")
	@PostMapping("/add-patient")
	public ResponseEntity<String> addPatient(@RequestBody PatientRequestBean object) {
		return  new ResponseEntity<String>(patientQueueService.addPatient(object),HttpStatus.OK);

	
	}
	
	@DeleteMapping("/delete-patient")
	public String deletePatient(@RequestBody PatientRequestBean object) {
		return patientQueueService.deletePatient(object);

	
	}
	
	@PostMapping("patient-list")
	public ResponseEntity<PatientListResponse> getPatient(@RequestBody DoctorId object) {
		return new ResponseEntity<PatientListResponse>(patientQueueService.getPatient(object),HttpStatus.OK);
	


}
}