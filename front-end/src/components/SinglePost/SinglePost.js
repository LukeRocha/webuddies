import React from "react";
import { useGlobalContext } from "../../context";
import {
  PostContainer,
  User,
  TimeStamp,
  PostContent,
  PostButtons,
  InterfaceButton,
} from "./styled";

const SinglePost = ({ post, id }) => {
  const { userState } = useGlobalContext();
  return (
    <>
      <PostContainer id={id}>
        <User>{userState.userData.nickname}</User>
        <TimeStamp>{`at ${post.timestamp}`}</TimeStamp>
        <PostContent>{`${post.post_content}`}</PostContent>
        <PostButtons>
          <InterfaceButton
            role="img"
            alt="like"
            onClick={() => console.log("tem boi na linha")}
          >
            💜 like
          </InterfaceButton>
        </PostButtons>
      </PostContainer>
    </>
  );
};

export default SinglePost;
