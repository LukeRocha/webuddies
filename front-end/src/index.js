import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./context";
import Register from "./pages/Register";
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Register />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
