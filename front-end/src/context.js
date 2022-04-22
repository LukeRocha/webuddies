import React, { useContext } from "react";
import { postUser } from "./operations/operations";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const registerUser = async (userInputs) => {
    await postUser(userInputs);
  };

  return (
    <AppContext.Provider value={registerUser}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
