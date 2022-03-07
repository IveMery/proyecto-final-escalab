import React from "react";
import { createContext, useState } from "react";

const ButtonsContext = createContext();
const ButtonsContextProvider = ({ children }) => {
  const [show, setShow] = useState("");
  return (
    <ButtonsContext.Provider value={{ show, setShow }}>
      {children}
    </ButtonsContext.Provider>
  );
};

export { ButtonsContext, ButtonsContextProvider };
