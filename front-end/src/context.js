import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import {
  registerNewUser,
  authUser,
  getUserPosts,
} from "./operations/operations";

const AppContext = React.createContext();

const initialState = {
  userState: {
    userData: {},
    userPosts: [],
  },
  serverMessages: {},
  accessToken: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerSubmitHandler = async (userInputs) => {
    const registeredUser = await registerNewUser(userInputs);
    dispatch({ type: "REGISTER_USER", payload: registeredUser.data });
  };

  const authUserCredentials = async (userCredentials) => {
    const userDataFromDb = await authUser(userCredentials);
    dispatch({
      type: "AUTH_USER",
      payload: userDataFromDb,
    });
  };

  const getUserPostsData = async (userData, token) => {
    const postsDataFromDb = await getUserPosts(userData.id, token);
    console.log("ola", postsDataFromDb);
    dispatch({ type: "FETCH_USER_POSTS", payload: postsDataFromDb });
  };

  const userLogout = () => {
    const emptyState = {
      ...state,
      userState: {
        userData: "",
        userPosts: "",
      },
      accessToken: false,
    };
    dispatch({ type: "USER_LOGOUT", payload: emptyState });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        registerSubmitHandler,
        authUserCredentials,
        getUserPostsData,
        userLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
