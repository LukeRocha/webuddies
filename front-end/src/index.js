import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context";
import "./styles.css";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import FriendshipAccess from "./pages/friendshipAccess/FriendshipAccess";
import Friendships from "./pages/friendships/Friendships";
import SearchPage from "./pages/searchPage/SearchPage";
import EditAccount from "./pages/editAccount/EditAccount";

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
