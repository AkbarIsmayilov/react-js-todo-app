import React, { useContext } from "react";
import { useState } from "react";
import { ToDosContext } from "../../context/ToDosContext";
import ToDoItem from "../ToDoItem/ToDoItem";
const ToDoContainer = () => {
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
        { body: inputValue, id: prev.length, isDone: false },
      ]);
      setInputValue("");
    }
  };
  return (
    <div>
      <p>todo container</p>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={handleChange} name="todoinput" />
        <button type="submit">Add</button>
      </form>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ToDoContainer;
