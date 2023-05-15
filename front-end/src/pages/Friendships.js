import React, { useEffect } from "react";
import UserPreview from "../components/UserPreview/UserPreview";
import Header from "../components/Header/Header";
import BottomNav from "../components/BottomNav/BottomNav";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const FriendshipPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px auto;
`;
const Friendships = () => {
  const { ...state } = useGlobalContext();
  const friendships = state.userState.userFriendships;

  const user = {
    id: "1",
    profile_image: "https://encurtador.com.br/apGLM",
    nickname: "LukeRocha",
    first_name: "Lucas",
    last_name: "Rocha",
    status: "Hello!",
  };

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
