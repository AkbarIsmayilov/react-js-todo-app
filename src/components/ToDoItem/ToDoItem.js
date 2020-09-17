import React, { useState } from "react";
import "./ToDoItem.css";
import TrashIcon from "../../images/trash.png";
import EditIcon from "../../images/pencil.png";
import Done from "../../images/done.png";
import Undone from "../../images/undone.png";

const ToDoItem = ({
  todo: { body, id, isDone },
  deleteTodoHandler,
  toggleTodoHanler,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div className="todo-item-container">
      <p>{body}</p>

      <div className="toolbar">
        <div onClick={() => deleteTodoHandler(id)}>
          <img className="icon" src={TrashIcon} alt="Delete " />
        </div>

        <div>
          <img className="icon" src={EditIcon} alt="Edit " />
        </div>
        <div onClick={() => toggleTodoHanler(id)}>
          <img className="icon" src={isDone ? Done : Undone} alt="Edit " />
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
