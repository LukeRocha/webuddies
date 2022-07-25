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
  serverMessages: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerSubmitHandler = async (userInputs) => {
    const registeredUser = await postUser(userInputs);
    dispatch({ type: "REGISTER_USER", payload: registeredUser.data });
  };

  const authUserCredentials = async (userCredentials) => {
    const userDataFromDb = await authUser(userCredentials);
    console.log("aqui", userDataFromDb);
    dispatch({
      type: "LOGIN_USER",
      payload: userDataFromDb.data.userData,
    });
  };

  const getUserPostsData = async (userData) => {
    const postsDataFromDb = await getUserPosts(userData.id);
    dispatch({ type: "FETCH_USER_POSTS", payload: postsDataFromDb });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        registerSubmitHandler,
        authUserCredentials,
        getUserPostsData,
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
