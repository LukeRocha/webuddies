import React from "react";
import {
  PostContainer,
  User,
  TimeStamp,
  PostContent,
  PostButtons,
  InterfaceButton,
} from "./styled";

const SinglePost = ({ post, id }) => {
  return (
    <>
      <PostContainer id={id}>
        <User>Lucas</User>
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
          <InterfaceButton onClick={() => console.log("tem boi na linha")}>
            💬 comments
          </InterfaceButton>
        </PostButtons>
      </PostContainer>
    </>
  );
};

export default SinglePost;
