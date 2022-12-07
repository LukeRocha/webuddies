import React, { useCallback, useEffect, useState } from "react";
import SinglePost from "../SinglePost/SinglePost";
import { useGlobalContext } from "../../context";
import { PostContainer } from "./styles";

const PostsContainer = () => {
  const { userState, getUserPostsData } = useGlobalContext();
  const [userPosts, setUserPosts] = useState([]);

  const realTimePostRender = useCallback(() => {
    setUserPosts(userState.userPosts);
  }, [userState.userPosts]);

  const storageToken = localStorage.getItem("access_token");
  useEffect(() => {
    storageToken && getUserPostsData(storageToken);
    realTimePostRender();
  }, [storageToken]);

  return (
    <>
      <PostContainer renderPosts={realTimePostRender}>
        {userState.userPosts &&
          userState.userPosts.map((post) => {
            return <SinglePost key={post.id} id={post.id} post={post} />;
          })}
      </PostContainer>
    </>
  );
};

export default PostsContainer;
