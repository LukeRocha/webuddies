import React from "react";
import BottomNav from "../components/BottomNav/BottomNav";

import Header from "../components/Header/Header";
import UserProfile from "../components/User/UserProfile/UserProfile";
import PostsContainer from "../components/PostsContainer/PostsContainer";
import NewPost from "../components/NewPost/NewPost";

const Profile = () => {
  return (
    <>
      <Header />
      <UserProfile />
      <NewPost />
      <PostsContainer />
      <BottomNav />
    </>
  );
};

export default Profile;
