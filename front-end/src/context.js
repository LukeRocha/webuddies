import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { postUser } from "./operations/operations";

const AppContext = React.createContext();

const initialState = {
  loginState: { userData: {} },
  errorMessage: {},
  messages: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerSubmitHandler = async (userInputs) => {
    const registeredUser = await postUser(userInputs);
    dispatch({ type: "REGISTER_USER", payload: registeredUser });
  };

  return (
    <AppContext.Provider value={{ state, registerSubmitHandler }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
