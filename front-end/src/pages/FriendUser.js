import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { useParams } from "react-router-dom";
import { followNewFriend } from "../operations/operations";

import Button from "../components/Button/Button";

const FriendUser = () => {
  const { getBuddyData, ...state } = useGlobalContext();
  const [friendshipObject, setFriendshipObject] = useState("");
  const params = useParams();
  const { id, nickname, first_name, last_name } = { ...state.accessedUserPage };

  useEffect(() => {
    getBuddyData(params.nickname);
    setFriendshipObject({
      main_user_id: id,
      target_friend_id: state.userState.userData.id,
    });
    console.log(friendshipObject);
  }, []);

  // THERE ARE SOME STEPS TO FOLLOW:
  //iF YOU DON'T HAVE A TOKEN, DISPLAY MESSAGE WITH LINK TO CREATE ACCOUNT, OR JUST SHOW USER POSTS IN THERE -> IF IT'S EASY TO DO, PRIVATE PAGE DATA, IN DB
  //IF THERE ACTUALLY IS A TOKEN, JUST DISPLAY THE FRIENDSHIP BUTTON
  //THERE ARE POSSIBILITY TO VERIFY THIS BEFORE ACCESS THE PAGE?

  return (
    <>
      <h1>{nickname}</h1>
      <h2>{first_name}</h2>
      <h3>{last_name}</h3>
      <Button onClick={() => followNewFriend()}>Buddy me</Button>
    </>
  );
};

export default FriendUser;
