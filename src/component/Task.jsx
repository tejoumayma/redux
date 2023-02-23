import React from "react";
import { useDispatch } from "react-redux";
import { deletTask, setCurrentTask } from "../redux/action/taskaction";
const Task = ({ todo }) => {
  const dispatch = useDispatch();
  const onClick = (e) => {
    if (e.target.id === "edit") {
      dispatch(setCurrentTask(todo));
    }
    if (e.target == "delete") {
      dispatch(deletTask(todo.id));
    }
  };
  return (
    <li
      className="list-group-item d-flex align-item-center justify-content-between li"
      id="todo-list li"
    >
      <div>{todo.description}</div>
      <div className="btn-group" role="group">
        <i
          id="completed"
          className="fa fa-check text-secondary"
          onClick={onClick}
        ></i>
        <i
          id="edit"
          className="fa fa-pen text-dark"
          data-bs-toggle="modal"
          data-bs-target="#editTask"
          onClick={onClick}
        ></i>
        <i
          id="delete"
          className="fa fa-trash text-danger"
          onClick={onClick}
        ></i>
      </div>
    </li>
  );
};

export default Task;
