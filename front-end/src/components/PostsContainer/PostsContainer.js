import React from "react";
import styled from "styled-components";
import SinglePost from "../SinglePost/SinglePost";

const PostContainer = styled.section`
  display: flex;
  width: 95vw;

  position: relative;
  margin: 10px auto 80px auto;
  background-color: #3a393e;
  flex-flow: column nowrap;
  justify-content: center;
  border-radius: 10px;

  @media (min-width: 600px) {
    width: 80vw;
  }
`;

const PostsContainer = () => {
  return (
    <PostContainer>
      <SinglePost />
      <SinglePost />
      <SinglePost />
    </PostContainer>
  );
};

export default PostsContainer;
