import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { postUser, getUser } from "./operations/operations";

const AppContext = React.createContext();

const initialState = {
  userData: {},
  errorMessage: {},
  messages: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loginUser = async () => {
    const dataFromDb = await getUser();
    dispatch({ type: "LOGIN_USER", payload: dataFromDb });
  };
  const registerSubmitHandler = async (userInputs) => {
    const registeredUser = await postUser(userInputs);
    dispatch({ type: "REGISTER_USER", payload: registeredUser });
  };

  return (
    <AppContext.Provider value={{ state, registerSubmitHandler, loginUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
