import React, { useEffect } from "react";
import SinglePost from "../SinglePost/SinglePost";
import { useGlobalContext } from "../../context";
import { PostContainer } from "./styles";

const PostsContainer = () => {
  const { accessToken, userState, getUserPostsData } = useGlobalContext();

  useEffect(() => {
    accessToken && getUserPostsData(accessToken);
    console.log(accessToken);
    // ;
  }, [accessToken]);

  useEffect(() => {
    console.log(123);
  }, [userState.userPosts]);
  return (
    <PostContainer>
      {userState.userPosts &&
        userState.userPosts.map((post) => {
          return <SinglePost key={post.id} id={post.id} post={post} />;
        })}
    </PostContainer>
  );
};

export default PostsContainer;
