import React, { useCallback, useEffect, useState } from "react";
import SinglePost from "../SinglePost/SinglePost";
import { useGlobalContext } from "../../context";
import { PostContainer } from "./styles";

const PostsContainer = () => {
  const { userState, getUserPostsData } = useGlobalContext();
  const getToken = localStorage.getItem("access_token");
  const [posts, setPosts] = useState(userState.userPosts);

  useEffect(() => {
    const renderPosts = async () => {
      await getUserPostsData(getToken);
      setPosts(userState.userPosts);
    };

    return renderPosts();
  }, [getToken]);

  return (
    <>
      <PostContainer>
        {userState.userPosts &&
          userState.userPosts.map((post) => {
            return <SinglePost key={post.id} id={post.id} post={post} />;
          })}
      </PostContainer>
    </>
  );
};

export default PostsContainer;
