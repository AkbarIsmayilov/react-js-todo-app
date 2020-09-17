import React from "react";
import "./App.css";
import ToDoContainer from "./components/ToDoContainer/ToDoContainer";
import ToDosProvider from "./context/ToDosContext";

export const App = () => {
  return (
    <ToDosProvider>
      <div className="App">
        <ToDoContainer />
      </div>
    </ToDosProvider>
  );
};

export default App;
