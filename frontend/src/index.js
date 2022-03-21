import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./components/Header/Header.js";
import BottomNav from "./components/BottomNav/BottomNav.js";
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <BottomNav />
  </React.StrictMode>,
  document.getElementById("root")
);
