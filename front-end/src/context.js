import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { postUser, getUser, getUserPosts } from "./operations/operations";

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
    const userDataFromDb = await getUser();
    const postsDataFromDb = await getUserPosts();
    dispatch({
      type: "LOGIN_USER",
      userPayload: userDataFromDb,
      postsPayload: postsDataFromDb,
    });
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
