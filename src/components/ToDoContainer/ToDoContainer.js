import React, { useContext } from "react";
import { useState } from "react";

import "./ToDoContainer.css";
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

  const deleteTodo = (todoId) => {
    console.log();
    const newState = todos.filter((todo) => todo.id !== todoId);
    setTodos([...newState]);
  };

  const editTodo = (todoId, body) => {
    const newState = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, body };
      }
      return todo;
    });
    setTodos([...newState]);
  };

  const toggleTodo = (todoId) => {
    console.log();
    const newState = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos([...newState]);
  };

  const sortedTodos = todos.sort(function (x, y) {
    return x.isDone === y.isDone ? 0 : x.isDone ? -1 : 1;
  });

  return (
    <div className="todo-container">
      <p>todo container</p>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={handleChange} name="todoinput" />
        <button type="submit">Add</button>
      </form>
      {sortedTodos.map((todo) => (
        <ToDoItem
          toggleTodoHanler={toggleTodo}
          editTodoHandler={editTodo}
          deleteTodoHandler={deleteTodo}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default ToDoContainer;
