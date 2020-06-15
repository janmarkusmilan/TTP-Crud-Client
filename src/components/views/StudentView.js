import React from "react";
import { Link } from "react-router-dom";

const StudentView = (props) => {
  return (
    <>
      <img src={props.student.imageUrl} alt={props.student.firstName} />
      <h1>
        {props.student.firstName} {props.student.lastName}
      </h1>
      <p>{props.student.email}</p>
      <p>{props.student.gpa}</p>

      <Link className="edit-link" to={`/students/${props.student.id}/edit`}>
        Edit
      </Link>
      <button onClick={() => props.handleDelete(props.student.id)}>
        Delete
      </button>
    </>
  );
};

export default StudentView;
