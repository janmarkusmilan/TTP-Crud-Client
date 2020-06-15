import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = ({ allStudents, handleDelete }) => {
  if (!allStudents.length) {
    return <div className="all-students">There are no students</div>;
  }

  return (
    <div className="all-students">
      <Link to="/students/new" className="add-student">
        New Student
      </Link>
      <div>
        {allStudents.map((student) => (
          <div key={student.id}>
            <Link to={`/students/${student.id}`}>
              <h1>
                {student.firstName}
                {student.lastName}
              </h1>
            </Link>
            <img src={student.imageUrl} width="200px" alt={student.firstName} />
            <button onClick={() => handleDelete(student.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllStudentsView;
