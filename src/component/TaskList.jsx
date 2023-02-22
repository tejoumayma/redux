import React from "react";
import Task from "./Task";

const TaskList = () => {
  return (
    <ul className="liste-group mt-3">
      {[
        { description: "task1", id: 1 },
        { description: "task2", id: 2 },
      ].map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TaskList;
