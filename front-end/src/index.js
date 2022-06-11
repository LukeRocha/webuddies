import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./context";
import "./styles.css";
import Login from "./pages/Login";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Login />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
