package com.michaelkatan.amigoscodefullstack.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class StudentDataAccessService
{
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public StudentDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Student> selectAllStudents()
    {
        String sql = "select student_id,first_name,last_name,last_name,email,gender from student";

        List<Student> students = jdbcTemplate.query(sql, (result, i) ->
        {
            String tempId = result.getString("student_id");
            UUID studentId = UUID.fromString(tempId);
            String firstName = result.getString("first_name");
            String lastName = result.getString("last_name");
            String email = result.getString("email");
            String tempGender = result.getString("gender").toUpperCase();
            Student.Gender gender = Student.Gender.valueOf(tempGender);

            return new Student(studentId,firstName,lastName,email,gender);
        });

        return students;
    }

}
