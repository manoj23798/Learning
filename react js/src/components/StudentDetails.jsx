import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const StudentDetails = ({ students }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = students.find((s) => s.id === id);

  if (!student) {
    return (
      <section>
        <h2>Student Details</h2>
        <p>Student not found.</p>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </section>
    );
  }

  return (
    <section>
      <h2>Student Details</h2>
      <div className="card">
        <p>
          <strong>Name:</strong> {student.name}
        </p>
        <p>
          <strong>Age:</strong> {student.age}
        </p>
        <p>
          <strong>Course:</strong> {student.course}
        </p>
      </div>
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>
        Back
      </button>
    </section>
  );
};

export default StudentDetails;


