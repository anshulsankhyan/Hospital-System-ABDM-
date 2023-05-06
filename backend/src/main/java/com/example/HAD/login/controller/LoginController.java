package com.example.HAD.login.controller;

import com.example.HAD.config.JwtUtil;
import com.example.HAD.login.bean.LoginResponse;
import com.example.HAD.login.dao.JpaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.HAD.login.bean.LoginBean;
import com.example.HAD.login.service.LoginServiceImpl;

@RestController
public class LoginController {

	@Autowired
	JpaRepo dao2;

	@Autowired
	private JwtUtil jwtUtil;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	LoginServiceImpl Loginservice;

	@CrossOrigin (origins = "*")
	@PostMapping("/login")
	public LoginResponse login (@RequestBody LoginBean object) throws Exception{

		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(object.getId(), object.getPassword())
			);
		} catch (Exception ex) {
			System.out.println("inavalid username/password");
			return new LoginResponse();
		}
		LoginBean abc= dao2.findById(object.getId()).orElse(null);
		LoginResponse response=new LoginResponse();
		response.setName(abc.getBean().getName());
		response.setHosId(abc.getBean().getHos_id());
		response.setToken(jwtUtil.generateToken(object.getId(),Loginservice.login(object)));
		return response;
		// return Loginservice.login(object);
	}

}
