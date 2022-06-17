import React from "react";
import BottomNav from "../components/BottomNav/BottomNav";

import Header from "../components/Header/Header";
import UserProfile from "../components/User/UserProfile/UserProfile";
import PostsContainer from "../components/PostsContainer/PostsContainer";
import PostArea from "../components/PostArea/PostArea";
const Profile = () => {
  return (
    <>
      <Header />
      <UserProfile />
      <PostArea />
      <PostsContainer />
      <BottomNav />
    </>
  );
};

export default Profile;
