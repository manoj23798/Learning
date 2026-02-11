import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentList = ({ students, onDelete }) => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/students/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  if (!students.length) {
    return (
      <section>
        <h2>Student List</h2>
        <p>No students found. Try adding one from the "Add Student" page.</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Student List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.course}</td>
              <td>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleViewDetails(student.id)}
                  style={{ marginRight: '10px' }}
                >
                  View Details
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(student.id)}
                  style={{ marginRight: '10px' }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default StudentList;


