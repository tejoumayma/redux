import React from "react";

const Task = ({ todo }) => {
  return (
    <li
      className="list-group-item d-flex align-item-center justify-content-between li"
      id="todo-list li"
    >
      <div>{todo.description}</div>
      <div className="btn-group" role="group">
        <i id="completed" className="fa fa-check text-secondary"></i>
        <i
          id="edit"
          className="fa fa-pen text-dark"
          data-bs-toggle="modal"
          data-bs-target="#editTask"
          t
        ></i>
        <i id="delete" className="fa fa-trash text-danger"></i>
      </div>
    </li>
  );
};

export default Task;
