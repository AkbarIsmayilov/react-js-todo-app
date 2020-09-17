import React from "react";
import "./ToDoItem.css";
const ToDoItem = ({ todo: { body, id, isDone } }) => {
  return (
    <div className="todo-item-container">
      <p>{body}</p>
    </div>
  );
};

export default ToDoItem;
