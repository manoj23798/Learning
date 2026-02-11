import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addStudent, getStudentById, updateStudent } from '../services/api';

const AddStudent = ({ onStudentSaved }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  useEffect(() => {
    if (isEditMode) {
      const fetchStudent = async () => {
        try {
          const student = await getStudentById(id);
          setName(student.name);
          setAge(student.age);
          setCourse(student.course);
        } catch (error) {
          console.error('Failed to fetch student details:', error);
        }
      };
      fetchStudent();
    }
  }, [id, isEditMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !age.trim() || !course.trim()) {
      return;
    }

    const studentData = {
      name: name.trim(),
      age: age.trim(),
      course: course.trim(),
    };

    try {
      if (isEditMode) {
        await updateStudent(id, studentData);
      } else {
        await addStudent(studentData);
      }

      onStudentSaved();
      navigate('/');
    } catch (error) {
      console.error('Failed to save student:', error);
    }
  };

  return (
    <section>
      <h2>{isEditMode ? 'Edit Student' : 'Add Student'}</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter student name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter age"
            min="1"
          />
        </div>

        <div className="form-group">
          <label htmlFor="course">Course</label>
          <input
            id="course"
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="Enter course"
          />
        </div>

        <button className="btn btn-primary" type="submit">
          {isEditMode ? 'Update' : 'Save'}
        </button>
      </form>
    </section>
  );
};

export default AddStudent;


