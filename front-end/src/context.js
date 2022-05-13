import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { postUser } from "./operations/operations";

const AppContext = React.createContext();

// the state needs to be separated on login and errors and so on
const initialState = {
  loginState: {
    userData: {},
    errors: {},
    //replace ()=() with string template
  },
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerUser = async (userInputs) => {
    const registeredUser = await postUser(userInputs);
    dispatch({ type: "REGISTER_USER", payload: registeredUser });
  };

  return (
    <AppContext.Provider value={registerUser}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
