import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SinglePost from "../SinglePost/SinglePost";
import { useGlobalContext } from "../../context";
import { getUserPosts } from "../../operations/operations";

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
  const { state } = useGlobalContext();
  const [userPosts, setUserPosts] = useState(state.userState.userPosts);

  useEffect(() => {
    setUserPosts(state.userState.userPosts);
  }, [state]);

  return (
    <PostContainer>
      {userPosts.map((post, index) => {
        return <SinglePost key={index} id={post.id} post={post} />;
      })}
    </PostContainer>
  );
};

export default PostsContainer;
