import React, { useState, useEffect } from "react";
import SinglePost from "../SinglePost/SinglePost";
import { useGlobalContext } from "../../context";
import { PostContainer } from "./styles";
import { getUserPosts } from "../../operations/operations";

const PostsContainer = () => {
  const { state, getUserPostsData } = useGlobalContext();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    getUserPostsData(state.accessToken);
    console.log(state.userState.userPosts);
    setUserPosts(state.userState.userPosts);
    console.log(userPosts);
  }, [userPosts]);

  return (
    <PostContainer>
      {userPosts &&
        userPosts.map((post) => {
          console.log(post);
          return <SinglePost key={post.id} id={post.id} post={post} />;
        })}
    </PostContainer>
  );
};

export default PostsContainer;
