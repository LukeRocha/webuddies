import React from "react";
import Header from "../../components/Header/Header";
import BottomNav from "../../components/BottomNav/BottomNav";
import FriendUser from "../../components/User/FriendshipProfile/FriendshipProfile";

const FriendshipAccess = () => {
  return (
    <>
      <Header />
      <FriendUser />
      <BottomNav />
    </>
  );
};

export default FriendshipAccess;
