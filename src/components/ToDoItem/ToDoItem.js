import React, { useState } from "react";
import "./ToDoItem.css";

import TrashIcon from "../../images/trash.png";
import EditIcon from "../../images/pencil.png";
import Done from "../../images/done.png";
import Undone from "../../images/undone.png";
import { useContext } from "react";
import { EditContext } from "../../context/EditContext";

const ToDoItem = ({
  todo: { body, id, isDone },
  deleteTodoHandler,
  toggleTodoHanler,
  editTodoTrigger,
}) => {
  const [itemToBeEdit, setItemToBeEdit] = useContext(EditContext);

  return (
    <div className="todo-item-container">
      <p className="decribtion">{body}</p>

      <div className="toolbar">
        <div onClick={() => deleteTodoHandler(id)}>
          <img className="icon" src={TrashIcon} alt="Delete " />
        </div>

        <div
          onClick={() => {
            setItemToBeEdit(id);
            console.log(itemToBeEdit, "sdssdsd");
          }}
        >
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
