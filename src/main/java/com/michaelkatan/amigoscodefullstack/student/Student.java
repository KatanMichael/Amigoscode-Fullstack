package com.michaelkatan.amigoscodefullstack.student;

import java.util.UUID;

public class Student
{
    private final UUID studentId;
    private final String firstName;
    private final String lastName;
    private final String email;
    private final Gender gender;
    //private final String key;

    enum Gender
    {
        MALE,FEMALE;
    }

    public Student(
                UUID studentId,
            String firstName,
            String lastName,
            String email,
            Gender gender) {
        this.studentId = studentId;
       // this.key = studentId.toString();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
    }

    public UUID getStudentId() {
        return studentId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public Gender getGender() {
        return gender;
    }


}
