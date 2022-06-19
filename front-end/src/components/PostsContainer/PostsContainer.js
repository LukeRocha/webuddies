import React from "react";
import styled from "styled-components";
import SinglePost from "../SinglePost/SinglePost";
import { useGlobalContext } from "../../context";

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

const PostsContainer = ({ children }) => {
  const { state } = useGlobalContext();
  const userPosts = [state.userState.userPosts];

  return (
    <PostContainer>
      {userPosts.map((post, index) => {
        <SinglePost />;
      })}
    </PostContainer>
  );
};

export default PostsContainer;
