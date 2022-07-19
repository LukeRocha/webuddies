import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { postUser, getUserPosts, authUser } from "./operations/operations";

const AppContext = React.createContext();

const initialState = {
  userState: {
    userData: {},
    userPosts: [],
  },
  message: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerSubmitHandler = async (userInputs) => {
    const registeredUser = await postUser(userInputs);
    dispatch({ type: "REGISTER_USER", payload: registeredUser.data });
  };

  const authUserCredentials = async (userCredentials) => {
    const userDataFromDb = await authUser(userCredentials);
    const postsDataFromDb = await getUserPosts();
    console.log("aqui", userDataFromDb);
    dispatch({
      type: "LOGIN_USER",
      userPayload: userDataFromDb.data.userData,
      postsPayload: postsDataFromDb,
    });
  };

  return (
    <AppContext.Provider
      value={{ state, registerSubmitHandler, authUserCredentials }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
