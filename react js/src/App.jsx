import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import StudentList from './components/StudentList.jsx';
import AddStudent from './components/AddStudent.jsx';
import StudentDetails from './components/StudentDetails.jsx';
import { getStudents, deleteStudent } from './services/api';

const App = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDeleteStudent = async (id) => {
    try {
      await deleteStudent(id);
      setStudents((prev) => prev.filter((student) => student.id !== id));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleStudentAddedOrUpdated = () => {
    fetchStudents();
  };

  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={
              <StudentList students={students} onDelete={handleDeleteStudent} />
            }
          />
          <Route
            path="/add"
            element={<AddStudent onStudentSaved={handleStudentAddedOrUpdated} />}
          />
          <Route
            path="/edit/:id"
            element={<AddStudent onStudentSaved={handleStudentAddedOrUpdated} />}
          />
          <Route
            path="/students/:id"
            element={<StudentDetails students={students} />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;


