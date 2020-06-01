package com.michaelkatan.amigoscodefullstack.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/student")
public class StudentController
{
    @GetMapping()
    public List<Student> getAllStudents()
    {
        ArrayList list = new ArrayList<>();
        list.add(new Student(UUID.randomUUID(), "Michael",
                "Katan","Email", Student.Gender.MALE));
        return list;
    }

}
