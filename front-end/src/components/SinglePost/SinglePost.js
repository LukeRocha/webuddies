import React from "react";
import styled from "styled-components";

const PostContainer = styled.article`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin: 8px;
  padding: 12px;
  background-color: #242424;
  border-radius: 4px;
  width: auto;
`;

const User = styled.h3`
  color: white;
  text-align: left;
`;

const TimeStamp = styled.small`
  color: white;
  text-align: left;
  margin-bottom: 8px;
`;

const PostContent = styled.span`
  display: flex;
  text-align: left;
  text-indent: 8px;
  color: white;
`;
const PostButtons = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  width: 100vw;
  margin-top: 6px;
  justify-content: left;
  gap: 12px;
  color: purple;
`;

const InterfaceButton = styled.button`
  border-radius: 4px;
  width: auto;
  color: purple;
  background: none;
  border: none;
`;

const SinglePost = () => {
  return (
    <>
      <PostContainer>
        <User>{"Username:"}</User>
        <TimeStamp>{'at "timestamp"'}</TimeStamp>
        <PostContent>
          {
            "here goes the user's post content, it can be a link or a single text"
          }
        </PostContent>
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
