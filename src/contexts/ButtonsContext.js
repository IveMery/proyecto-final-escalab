import { createContext, useState } from "react";

const ButtonsContext = createContext();
// { show: false, setShow: () => {} }
const ButtonsContextProvider = ({ children }) => {
  const [show, setShow] = useState("");
  return (
    <ButtonsContext.Provider value={{ show, setShow }}>
      {children}
    </ButtonsContext.Provider>
  );
};

export { ButtonsContext, ButtonsContextProvider };
