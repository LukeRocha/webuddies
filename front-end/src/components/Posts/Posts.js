import React from "react";
import styled from "styled-components";
import SinglePost from "../SinglePost/SinglePost";

const PostsContainer = styled.section`
  display: flex;
  width: 95vw;
  heigth: 100vw;
  position: relative;
  margin: 10px auto 80px auto;
  background-color: #3a393e;
  flex-flow: column nowrap;
  justify-content: center;
  border-radius: 10px;
`;

const Title = styled.h2`
  margin: 8px auto;
  width: 60px;
  color: white;
  border-bottom: white 1px solid;
  text-align: center;
`;

const Posts = () => {
  return (
    <>
      <Title>Posts</Title>
      <PostsContainer>
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </PostsContainer>
    </>
  );
};

export default Posts;
