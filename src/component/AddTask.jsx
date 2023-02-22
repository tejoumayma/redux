import React from "react";

const AddTask = () => {
  return (
    <div className="card">
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="add your task"
        />
        <button className="btn btn-primary" type="button" id="button-addon1">
          Add
        </button>
      </div>
      <div className="d-flex justify-content-arround">
        <div>
          <input type="checkbox" id="completed" value="completed" />
          <label htmlFor="completed" className="form-lable">
            completed
          </label>
        </div>
        <div>
          <input type="checkbox" id="incompleted" value="incompleted" />
          <label htmlFor="incompleted" className="form-lable">
            incompleted
          </label>
        </div>
        <div>
          <input type="checkbox" id="all" value="all" />
          <label htmlFor="all" className="form-lable">
            All
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
