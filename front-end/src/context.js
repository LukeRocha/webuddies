import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import {
  registerNewUser,
  authUser, //MARKDOWN OF THE TASK!!!!!
  getUserPosts,
  accessUserProfile,
  validateUserToken,
  editAccountData,
} from "./operations/operations";

const AppContext = React.createContext();

const initialState = {
  userState: {
    userData: {},
    userPosts: [],
    userFriendships: [],
  },
  serverMessages: {},
  accessToken: false,
  accessedUserPage: {
    userData: {},
    userPosts: {},
  },
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerSubmitHandler = async (userInputs) => {
    const registeredUser = await registerNewUser(userInputs);
    dispatch({ type: "REGISTER_USER", payload: registeredUser.data });
  };

  const authUserCredentials = async (userCredentials) => {
    const userDataFromDb = await authUser(userCredentials);
    console.log(userDataFromDb);
    await localStorage.setItem("access_token", userDataFromDb.token);

    dispatch({
      type: "AUTH_USER",
      payload: userDataFromDb,
    });
  };

  const getUserDataByToken = async (token) => {
    const userDataFromDb = await validateUserToken(token);
    dispatch({ type: "GET_LOGGED_DATA", payload: userDataFromDb });
  };

  const editUserAccount = async (token, accountData) => {
    const editedUserData = await editAccountData(token, accountData);
    dispatch({ type: "EDIT_USER_ACCOUNT", payload: editedUserData });
  };

  const updateUserPosts = async (token) => {
    const postsDataFromDb = await getUserPosts(token);
    dispatch({ type: "FETCH_USER_POSTS", payload: postsDataFromDb });
  };

  const getBuddyData = async (nicknameParam) => {
    const userDataFromDb = await accessUserProfile(nicknameParam);
    dispatch({ type: "ACCESS_FRIEND_PAGE", payload: userDataFromDb });
  };

  const userLogout = async () => {
    await localStorage.removeItem("access_token");
    const emptyState = {
      ...state,
      userState: {
        userData: "",
        userPosts: "",
      },
    };
    dispatch({ type: "USER_LOGOUT", payload: emptyState });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        registerSubmitHandler,
        authUserCredentials,
        updateUserPosts,
        userLogout,
        getBuddyData,
        getUserDataByToken,
        editUserAccount,
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
