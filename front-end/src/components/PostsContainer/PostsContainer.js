import React, { useCallback, useEffect, useState } from "react";
import SinglePost from "../SinglePost/SinglePost";
import { useGlobalContext } from "../../context";
import { PostContainer } from "./styles";

const PostsContainer = () => {
  const { accessToken, userState, getUserPostsData } = useGlobalContext();
  const [userPosts, setUserPosts] = useState([]);

  const renderPostsRealTimeForRealThisTime = useCallback(() => {
    setUserPosts(userState.userPosts);
    console.log(userPosts);
  }, [userState.userPosts]);

  useEffect(() => {
    accessToken && getUserPostsData(accessToken);
    renderPostsRealTimeForRealThisTime();
  }, [accessToken]);

  return (
    <>
      <PostContainer renderPosts={renderPostsRealTimeForRealThisTime}>
        {userPosts &&
          userPosts.map((post) => {
            return <SinglePost key={post.id} id={post.id} post={post} />;
          })}
      </PostContainer>
      <PostContainer renderPosts={renderPostsRealTimeForRealThisTime}>
        {userState.userPosts &&
          userState.userPosts.map((post) => {
            return <SinglePost key={post.id} id={post.id} post={post} />;
          })}
      </PostContainer>
    </>
  );
};

export default PostsContainer;
