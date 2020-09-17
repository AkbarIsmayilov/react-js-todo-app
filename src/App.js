import React from "react";
import "./App.css";
import ToDoContainer from "./components/ToDoContainer/ToDoContainer";
import EditProvider, { EditContext } from "./context/EditContext";
import ToDosProvider from "./context/ToDosContext";

export const App = () => {
  return (
    <ToDosProvider>
      <EditProvider>
        <div className="App">
          <ToDoContainer />
        </div>
      </EditProvider>
    </ToDosProvider>
  );
};

export default App;
