import React, { useState, useContext } from "react";
import { useEffect } from "react";

import { EditContext } from "../../context/EditContext";
import { ToDosContext } from "../../context/ToDosContext";
import "./ToDoForm.css";

const ToDoForm = () => {
  const [todos, setTodos] = useContext(ToDosContext);
  const [itemToBeEdit, setItemToBeEdit] = useContext(EditContext);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (itemToBeEdit) {
      setInputValue(todos.find((todo) => todo.id === itemToBeEdit).body);
    }
  }, [itemToBeEdit]);

  const handleChange = (e) => {
    setInputValue(e.target.value.trim());
  };
  // console.log(itemToBeEdit, "itemToBeEdit");

  const addTodo = (e) => {
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

  const editTodo = (e) => {
    e.preventDefault();
    const newState = todos.map((todo) => {
      if (todo.id === itemToBeEdit) {
        return { ...todo, body: inputValue };
      }
      return todo;
    });
    setTodos([...newState]);
    setItemToBeEdit(null);
    setInputValue("");
  };

  const resetTodos = (todoId) => {
    setTodos((prev) =>
      prev.map((todo) => {
        return { ...todo, isDone: false };
      })
    );
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h1 className="app-title">ToDo Application </h1>
        <button className="primary-button" onClick={resetTodos}>
          Reset
        </button>
      </div>
      <form className="form" onSubmit={itemToBeEdit ? editTodo : addTodo}>
        <input
          value={inputValue}
          className="form-input"
          placeholder={itemToBeEdit ? "edit .... " : "add ...."}
          onChange={handleChange}
          name="todoinput"
        />
        <button className="primary-button2" type="submit">
          {itemToBeEdit ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
