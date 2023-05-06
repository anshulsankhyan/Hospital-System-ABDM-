package com.example.HAD.prescription.services;

import com.example.HAD.prescription.bean.MedicalRecords;
import com.example.HAD.prescription.bean.patientIDRes;
import com.example.HAD.prescription.dao.savedata;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class impl implements Save{

    @Autowired
    savedata saved;

    Date date = new Date();
    SimpleDateFormat formatter = new SimpleDateFormat("yyyy-mm-dd");
    String str = formatter.format(date);
    @Override
public String savePres(MedicalRecords obj) {

    MedicalRecords Bean = new MedicalRecords();

    Bean.setPatientId(obj.getPatientId());
    Bean.setPulse(obj.getPulse());
    Bean.setBloodPressure(obj.getBloodPressure());
    Bean.setDiagnosis(obj.getDiagnosis());
    //Bean.setConsentId();
    Bean.setDosage(obj.getDosage());
    Bean.setInstruction(obj.getInstruction());
    Bean.setMedicine(obj.getMedicine());
    Bean.setPattern(obj.getPattern());
    Bean.setTimings(obj.getTimings());
    //Bean.setVistid();
    Bean.setSymptons(obj.getSymptons());
    Bean.setDate(str);

    saved.save(Bean);

    return "sucess";
}

@Override
    public ResponseEntity<MedicalRecords> showPres(patientIDRes object){
    MedicalRecords Bean=new MedicalRecords();

    Bean= saved.findByPatientId(object.getPatientId());

    if(Bean!=null)
    {
        return new ResponseEntity<MedicalRecords>(Bean, HttpStatus.OK);
    }
//    else
//        return new ResponseEntity<bean>(Bean, HttpStatus.BAD_REQUEST);


    return null;
}




}
