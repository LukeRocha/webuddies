import React, { useEffect, useState } from "react";
import SinglePost from "../SinglePost/SinglePost";
import { useGlobalContext } from "../../context";
import { PostContainer } from "./styles";

const PostsContainer = () => {
  const { userState, updateUserPosts } = useGlobalContext();
  const token = localStorage.getItem("access_token");
  const [posts, setPosts] = useState(userState.userPosts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        await updateUserPosts(token);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    setPosts(userState.userPosts);
  }, [userState.userPosts]);

  return (
    <>
      <PostContainer>
        {posts ? (
          posts.map((post) => (
            <SinglePost key={post.id} id={post.id} post={post} />
          ))
        ) : (
          <p>No posts avaible</p>
        )}
      </PostContainer>
    </>
  );
};

export default PostsContainer;
