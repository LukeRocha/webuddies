import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SinglePost from "../SinglePost/SinglePost";
import { useGlobalContext } from "../../context";
import { PostContainer } from "./styles";

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
