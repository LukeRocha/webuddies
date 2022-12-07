import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import {
  registerNewUser,
  authUser,
  getUserPosts,
  accessUserProfile,
} from "./operations/operations";

const AppContext = React.createContext();

const initialState = {
  userState: {
    userData: {},
    userPosts: [],
  },
  serverMessages: {},
  accessToken: false,
  accessedUserPage: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerSubmitHandler = async (userInputs) => {
    const registeredUser = await registerNewUser(userInputs);
    dispatch({ type: "REGISTER_USER", payload: registeredUser.data });
  };

  const authUserCredentials = async (userCredentials) => {
    const userDataFromDb = await authUser(userCredentials);
    localStorage.setItem("access_token", userDataFromDb.token);
    dispatch({
      type: "AUTH_USER",
      payload: userDataFromDb,
    });
  };

  const getUserPostsData = async (token) => {
    const postsDataFromDb = await getUserPosts(token);
    dispatch({ type: "FETCH_USER_POSTS", payload: postsDataFromDb });
  };

  const getBuddyData = async (nicknameParam) => {
    const userDataFromDb = await accessUserProfile(nicknameParam);
    dispatch({ type: "ACCESS_FRIEND_PAGE", payload: userDataFromDb });
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
        ...state,
        registerSubmitHandler,
        authUserCredentials,
        getUserPostsData,
        userLogout,
        getBuddyData,
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
