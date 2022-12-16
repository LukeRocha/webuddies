import React from "react";
import BottomNav from "../components/BottomNav/BottomNav";

import Header from "../components/Header/Header";
import UserProfile from "../components/User/UserProfile/UserProfile";
import PostsContainer from "../components/PostsContainer/PostsContainer";
import NewPost from "../components/NewPost/NewPost";
import { useGlobalContext } from "../context";

const Profile = () => {
  const { ...state } = useGlobalContext();
  console.log("profile", state);
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
