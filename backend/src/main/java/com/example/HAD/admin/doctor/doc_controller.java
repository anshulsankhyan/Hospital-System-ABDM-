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



    @CrossOrigin(origins = "*")
    @PostMapping("/savdoc")
    public String service(@RequestBody largeBean object){

        return service.savedoc(object);

    }

    @CrossOrigin (origins = "*")
    @PostMapping("/deletedoc")
    public String delete(@RequestBody largeBean obj){

//        return service.deletedoc(obj);
        return null;
    }

}
