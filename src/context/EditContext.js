import React, { useState, createContext } from "react";

export const EditContext = createContext();

const EditProvider = ({ children }) => {
  const [itemToBeEdit, setItemToBeEdit] = useState(null);
  return (
    <EditContext.Provider value={[itemToBeEdit, setItemToBeEdit]}>
      {children}
    </EditContext.Provider>
  );
};

export default EditProvider;
