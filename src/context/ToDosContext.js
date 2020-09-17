import React, { useState, createContext } from "react";

export const ToDosContext = createContext();

const initialState = [
  { id: 1, body: "think algorithm ", isDone: false },
  { id: 2, body: "write a program  ", isDone: false },
  { id: 3, body: "feed pets", isDone: false },
  { id: 4, body: "do exercise", isDone: false },
];

const ToDosProvider = ({ children }) => {
  const [todos, setTodos] = useState(initialState);
  return (
    <ToDosContext.Provider value={[todos, setTodos]}>
      {children}
    </ToDosContext.Provider>
  );
};

export default ToDosProvider;
