import React, { useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const logger = (x) => console.log(x);
  return (
    <AppContext.Provider value={{ logger }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
