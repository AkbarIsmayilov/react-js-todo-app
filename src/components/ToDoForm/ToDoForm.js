import React, { useState, useContext } from "react";
import { ToDosContext } from "../../context/ToDosContext";

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
    <div>
      <p>todo container</p> <button onClick={resetTodos}>reset </button>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={handleChange} name="todoinput" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ToDoForm;
