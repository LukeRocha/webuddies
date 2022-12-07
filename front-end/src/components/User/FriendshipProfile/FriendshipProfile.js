import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../../context";
import { useParams } from "react-router-dom";
import { followNewFriend } from "../../../operations/operations";
import Button from "../../Button/Button";

import {
  UserContainer,
  UserDataContainer,
  ImageContainer,
  UserData,
  Status,
} from "../styled";

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
  }, []);

  return (
    <>
      <UserContainer>
        <UserDataContainer>
          <ImageContainer>
            <img
              alt="profile"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8czzbrLzXJ9R_uhKyMiwj1iGxKhJtH7pwlQ&usqp=CAU"
              }
            />
          </ImageContainer>
          <UserData>
            <h2>{nickname}</h2>
            <p>{`${first_name} ${last_name}`}</p>
            <small>288 buddies</small>
            <Status>{"Ahoy!"}</Status>
            <Button
              style={{
                backgroundColor: "var(--purple-button)",
              }}
              onClick={() => followNewFriend()}
            >
              Buddy me
            </Button>
          </UserData>
        </UserDataContainer>
      </UserContainer>
    </>
  );
};

export default FriendUser;
