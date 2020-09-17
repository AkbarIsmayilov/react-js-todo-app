import React, { useContext } from "react";
import { useState } from "react";

import "./ToDoContainer.css";
import { ToDosContext } from "../../context/ToDosContext";
import ToDoItem from "../ToDoItem/ToDoItem";
import ToDoForm from "../ToDoForm/ToDoForm";

const ToDoContainer = () => {
  const [todos, setTodos] = useContext(ToDosContext);
  const [inputValue, setInputValue] = useState("");

  const deleteTodo = (todoId) => {
    console.log();
    const newState = todos.filter((todo) => todo.id !== todoId);
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
      <ToDoForm />
      {sortedTodos.map((todo) => (
        <ToDoItem
          deleteTodoHandler={deleteTodo}
          toggleTodoHanler={toggleTodo}
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default ToDoContainer;
