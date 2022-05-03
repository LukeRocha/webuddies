import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./context";
import "./styles.css";
import Register from "./pages/Register";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Register />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
