import React, { useEffect } from "react";
import UserPreview from "../../components/UserPreview/UserPreview";
import Header from "../../components/Header/Header";
import BottomNav from "../../components/BottomNav/BottomNav";
import { FriendshipPageContainer } from "./styles";
import { useGlobalContext } from "../../context";

const Friendships = () => {
  const { ...state } = useGlobalContext();
  const friendships = state.userState.userFriendships;

  useEffect(() => {
    console.log(friendships);
  }, [state]);
  return (
    <>
      <Header />
      <FriendshipPageContainer>
        {friendships &&
          friendships.map((user, key) => {
            return <UserPreview user={user} key={key} />;
          })}
      </FriendshipPageContainer>
      <BottomNav />
    </>
  );
};

export default Friendships;
