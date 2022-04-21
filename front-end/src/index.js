import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./context";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
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
