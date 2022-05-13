import React from "react";
import BottomNav from "../components/BottomNav/BottomNav";

import Header from "../components/Header/Header";
import UserProfile from "../components/User/UserProfile/UserProfile";
import Posts from "../components/Posts/Posts";

const Profile = () => {
  return (
    <>
      <Header />
      <UserProfile />
      <Posts />
      <BottomNav />
    </>
  );
};

export default Profile;
