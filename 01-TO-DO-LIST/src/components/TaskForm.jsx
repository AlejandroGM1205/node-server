import { useState, useEffect } from "react";
import "../styles/task-form.css";

export const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  return (
    <div className="task-form-container">
      <div className="task-form">
        <input
          className="task-input"
          type="text"
          placeholder="Add your new todo"
        />
        <button className="task-button" type="submit">
          <b>+</b>
        </button>
      </div>
    </div>
  );
};
