package com.example.studentmanagement.service;

import com.example.studentmanagement.model.Student;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class StudentService {

    private List<Student> students = new ArrayList<>();

    public StudentService() {
        //dummy data
        students.add(new Student(UUID.randomUUID().toString(), "Alice Johnson", "20", "Computer Science"));
        students.add(new Student(UUID.randomUUID().toString(), "Bob Smith", "22", "Mathematics"));
    }

    public List<Student> getAllStudents() {
        return new ArrayList<>(students);
    }

    public Optional<Student> getStudentById(String id) {
        return students.stream()
                .filter(student -> student.getId().equals(id))
                .findFirst();
    }

    public Student addStudent(Student student) {
        if (student.getId() == null || student.getId().isEmpty()) {
            student.setId(UUID.randomUUID().toString());
        }
        students.add(student);
        return student;
    }

    public Optional<Student> updateStudent(String id, Student studentDetails) {
        return getStudentById(id).map(existingStudent -> {
            existingStudent.setName(studentDetails.getName());
            existingStudent.setAge(studentDetails.getAge());
            existingStudent.setCourse(studentDetails.getCourse());
            return existingStudent;
        });
    }

    public boolean deleteStudent(String id) {
        return students.removeIf(student -> student.getId().equals(id));
    }
}
