import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./context";
import "./styles.css";
import Profile from "./pages/Profile";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Profile />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
