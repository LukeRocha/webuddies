import React from "react";
import BottomNav from "../components/BottomNav/BottomNav";

import Header from "../components/Header/Header";
import UserProfile from "../components/User/UserProfile/UserProfile";
import PostsContainer from "../components/PostsContainer/PostsContainer";

const Profile = () => {
  return (
    <>
      <Header />
      <UserProfile />
      <PostsContainer />
      <BottomNav />
    </>
  );
};

export default Profile;
