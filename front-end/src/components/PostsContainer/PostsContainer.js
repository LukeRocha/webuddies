import React, { useState, useEffect } from "react";
import SinglePost from "../SinglePost/SinglePost";
import { useGlobalContext } from "../../context";
import { PostContainer } from "./styles";
import { getUserPosts } from "../../operations/operations";

const PostsContainer = () => {
  const { state } = useGlobalContext();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    console.log(state);
    if (state.accessToken) {
      () => getUserPosts(state.userState.userData.id, state.accessToken);
    }
  }, [state.accessToken]);

  if (!state.accessToken) {
    return <div>{"nope"}</div>;
  }
  return (
    <PostContainer>
      {userPosts.map((post, index) => {
        return <SinglePost key={index} id={post.id} post={post} />;
      })}
    </PostContainer>
  );
};

export default PostsContainer;
