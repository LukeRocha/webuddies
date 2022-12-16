import React from "react";
import Header from "../components/Header/Header";
import BottomNav from "../components/BottomNav/BottomNav";
import FriendUser from "../components/User/FriendshipProfile/FriendshipProfile";
import { useGlobalContext } from "../context";

const FriendshipAccess = () => {
  const { ...state } = useGlobalContext();

  console.log("friendshipaccess", state);
  return (
    <>
      <Header />
      <FriendUser />
      <BottomNav />
    </>
  );
};

export default FriendshipAccess;
