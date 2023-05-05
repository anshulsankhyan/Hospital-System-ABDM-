package com.example.HAD.admin.doctor;

import com.example.HAD.login.bean.LoginBean;
import com.example.HAD.login.dao.JpaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.HAD.admin.doctor.doc_dao;
@Service
public class doc_ser_imp implements doc_service {
    
    @Autowired
    doc_dao dao1;
    
    @Autowired
    JpaRepo dao2;

    @Autowired
    doc_dao.DoctorHospitalIdGenerator idgenerator;
    

    @Override
    public String savedoc(largeBean obj) {
        
        docbean firstbean = new docbean();
        LoginBean secondbean = new LoginBean();



        String generated_id = idgenerator.generateDoctorHospitalId(obj.getName(), obj.getspeciality());
        String generated_hos_id = idgenerator.generateDoctorHospitalId(obj.getName(), "XYZ");
        
        firstbean.setMobile(obj.getMobile());
        firstbean.setName(obj.getName());
        firstbean.setAddress(obj.getAddress());
        firstbean.setHos_id(generated_hos_id);
        firstbean.setAbha_id(obj.getAbha_id());
        firstbean.setEmail_Id(obj.getEmail_Id());
        secondbean.setId(generated_id);
        secondbean.setPassword(obj.getPassword());
        secondbean.setType(obj.getRole());
        firstbean.setLogin(secondbean);
        firstbean.setCountry(obj.getCountry());
        firstbean.setGender(obj.getGender());
        firstbean.setSpecility(obj.getspeciality());
        firstbean.setYearofBirth(obj.getYearofBirth());



        dao1.save(firstbean);

        dao2.save(secondbean);
        
        
        
        return "sucess";
    }

//    @Override
//    public String deletedoc(largeBean obj) {
//        docbean firstbean = new docbean();
//        LoginBean secondbean = new LoginBean();
//
//        firstbean.setMobile(obj.mobile);
//        firstbean.setName(obj.name);
//        firstbean.setAddress(obj.Address);
//        firstbean.setAbha_id(obj.abha_id);
//        secondbean.setId(obj.id);
//        secondbean.setPassword(obj.password);
//        secondbean.setType(obj.role);
//
//        dao1.deleteById(firstbean.getAbha_id());
//
//        dao2.delete(secondbean);
//
//        return "deleted";
//
//   }
}
