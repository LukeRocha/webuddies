import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context";
import "./styles.css";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import FriendshipAccess from "./pages/FriendshipAccess";
import Friendships from "./pages/Friendships";
import SearchPage from "./pages/SearchPage";
import EditAccount from "./pages/EditAccount";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route exact path="/account/edit" element={<EditAccount />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users/:nickname" element={<FriendshipAccess />} />
          <Route path="/users/search" element={<SearchPage />} />
          <Route path="/friendships" element={<Friendships />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
