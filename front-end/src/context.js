import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { postUser, getUser } from "./operations/operations";

const AppContext = React.createContext();

const initialState = {
  userState: {
    userData: {},
    userPosts: {},
  },
  serverMessages: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerSubmitHandler = async (userInputs) => {
    const registeredUser = await postUser(userInputs);
    dispatch({ type: "REGISTER_USER", payload: registeredUser.data });
  };

  const loginUser = async () => {
    const dataFromDb = await getUser();
    dispatch({ type: "LOGIN_USER", payload: dataFromDb });
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
