import React, { useState } from "react";
import "./TaskList.css";
import { AiOutlineClose } from "react-icons/ai";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showError, setShowError] = useState(false);

  function addTask() {
    if (newTask.trim() === "") {
      setShowError(true);
      return;
    }
    setTasks([...tasks, newTask]);
    setNewTask("");
    setShowError(false);
  }

  function removeTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
    <div className="form-body">
      <div className="row">
        <div className="form-content">
          <div className="container-flex">
            <div className="text-center ">
              <h1>Task List</h1>
              {showError && (
                <div className="alert alert-danger mt-4" role="alert">
                  Please add a task
                </div>
              )}
              <input
                type="text"
                value={newTask}
                onChange={(event) => setNewTask(event.target.value)}
              />
              <button className="btn btn-primary" onClick={addTask}>
                Add
              </button>
            </div>
            <div className="task-list my-3">
              {tasks.map((task, index) => (
                <div className="my-2 " key={index}>
                  {task}{" "}
                  <btn onClick={() => removeTask(index)}>
                    <AiOutlineClose size={25} color={"red"} />
                  </btn>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
