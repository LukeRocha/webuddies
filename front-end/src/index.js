import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./context";
import Register from "./pages/Register";
import App from "./components/Form/Dorm";
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      {/* <Register /> */}
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
