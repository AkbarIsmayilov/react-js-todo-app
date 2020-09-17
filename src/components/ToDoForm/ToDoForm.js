import React, { useState, useContext } from "react";

import { ToDosContext } from "../../context/ToDosContext";
import "./ToDoForm.css";
const ToDoForm = ({ resetTodos }) => {
  const [todos, setTodos] = useContext(ToDosContext);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value.trim());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos((prev) => [
        ...prev,
        {
          body: inputValue,
          id: `${Math.random()}${Date.now()}`,
          isDone: false,
        },
      ]);
      setInputValue("");
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h1 className="app-title">ToDo Application </h1>
        <button className="primary-button" onClick={resetTodos}>
          Reset{" "}
        </button>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          placeholder="add todo..."
          value={inputValue}
          onChange={handleChange}
          name="todoinput"
        />
        <button className="primary-button2" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
