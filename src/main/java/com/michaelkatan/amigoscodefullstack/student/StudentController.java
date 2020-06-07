package com.michaelkatan.amigoscodefullstack.student;

import com.google.gson.Gson;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/students")
public class StudentController
{
    @CrossOrigin()
    @GetMapping()
    public List<Student> getAllStudents()
    {
        Gson gson = new Gson();

        ArrayList list = new ArrayList<>();
        list.add(new Student(UUID.randomUUID(), "Michael",
                "Katan","Email", Student.Gender.MALE));
        list.add(new Student(UUID.randomUUID(),"Sapir","Katan",
                "email",Student.Gender.FEMALE));

        list.add(new Student(UUID.randomUUID(),"Dekel","Katan",
                "email", Student.Gender.MALE));
        return list;
    }

}
