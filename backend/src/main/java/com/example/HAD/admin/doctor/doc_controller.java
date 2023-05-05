package com.example.HAD.admin.doctor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
public class doc_controller {

    @Autowired
    doc_service service;

    @Autowired
    doc_dao dao;



    @CrossOrigin(origins = "*")
    @PostMapping("/savdoc")
    public String service(@RequestBody largeBean object){

        return service.savedoc(object);

    }

//    @CrossOrigin (origins = "*")
//    @PostMapping("/deletedoc")
//    public void deleteDocBean(String hosId) {
////        docbean beanToDelete = dao.find(hosId);
////        if (beanToDelete != null) {
////            dao.remove(beanToDelete);
////        }
//  }
//
   }
