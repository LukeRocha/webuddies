import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context";
import { useParams } from "react-router-dom";
import { followNewFriend } from "../../operations/operations";
import Button from "../Button/Button";
import SinglePost from "../SinglePost/SinglePost";
import {
  FriendshipContainer,
  FriendshipDataContainer,
  ImageContainer,
  Status,
  FriendshipPostArea,
  MainData,
} from "./styles";

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
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      getBuddyData(params.nickname);
      setFriendPosts(userPosts);
    };
    getPosts();
  }, [friendPosts]);
  return (
    <FriendshipContainer>
      <FriendshipDataContainer>
        <ImageContainer>
          <img
            alt="profile"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8czzbrLzXJ9R_uhKyMiwj1iGxKhJtH7pwlQ&usqp=CAU"
            }
          />
        </ImageContainer>
        <MainData>
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
        </MainData>
      </FriendshipDataContainer>

      <FriendshipPostArea>
        {userPosts.length > 0 &&
          userPosts.map((post) => {
            return <SinglePost key={post.id} id={post.id} post={post} />;
          })}
      </FriendshipPostArea>
    </FriendshipContainer>
  );
};

export default FriendUser;
