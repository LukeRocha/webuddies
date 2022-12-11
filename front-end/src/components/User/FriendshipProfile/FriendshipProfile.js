import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../../context";
import { useParams } from "react-router-dom";
import { followNewFriend } from "../../../operations/operations";
import Button from "../../Button/Button";
import SinglePost from "../../SinglePost/SinglePost";
import {
  UserContainer,
  UserDataContainer,
  ImageContainer,
  UserData,
  Status,
} from "../styles";
import { FriendContainer, FriendshipPostArea } from "./style";

const FriendUser = () => {
  const { getBuddyData, ...state } = useGlobalContext();
  const params = useParams();
  const [friendPosts, setFriendPosts] = useState([]);
  const { id, nickname, first_name, last_name } =
    state.accessedUserPage.userData;
  const { userPosts } = state.accessedUserPage;

  const token = localStorage.getItem("access_token");

  useEffect(() => {
    getBuddyData(params.nickname);
    setFriendPosts(state.accessedUserPage.userPosts);
    console.log(state.accessedUserPage);
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      getBuddyData(params.nickname);
      setFriendPosts(userPosts);
    };
    getPosts();
  }, [friendPosts]);
  return (
    <FriendContainer>
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
            <small>Follow 1 Buddy</small>
            <Status>{"Ahoy!"}</Status>
            <Button
              style={{
                backgroundColor: "var(--purple-button)",
              }}
              onClick={() => followNewFriend(id, token)}
            >
              Buddy me
            </Button>
          </UserData>
        </UserDataContainer>
      </UserContainer>
      <FriendshipPostArea>
        {userPosts.length > 0 &&
          userPosts.map((post) => {
            return <SinglePost key={post.id} id={post.id} post={post} />;
          })}
      </FriendshipPostArea>
    </FriendContainer>
  );
};

export default FriendUser;
