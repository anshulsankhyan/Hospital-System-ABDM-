package com.example.HAD.login.controller;

import com.example.HAD.config.JwtUtil;
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
	private JwtUtil jwtUtil;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	LoginServiceImpl Loginservice;

	@CrossOrigin (origins = "*")
	@PostMapping("/login")
	public String login (@RequestBody LoginBean object) throws Exception{

		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(object.getId(), object.getPassword())
			);
		} catch (Exception ex) {
			System.out.println("inavalid username/password");
			return "Invalid Credentials";
		}
		return jwtUtil.generateToken(object.getId(),Loginservice.login(object));
		// return Loginservice.login(object);
	}

}
