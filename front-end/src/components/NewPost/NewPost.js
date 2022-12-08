import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import {
  NewPostContainer,
  TextareaWrapper,
  ImageContainer,
  PostContent,
  ButtonsWrapper,
} from "./styles";
import { useGlobalContext } from "../../context";
import { createNewPost } from "../../operations/operations";

const PostArea = ({ children }) => {
  const { userState, accessToken, getUserPostsData } = useGlobalContext();
  const [postContent, setPostContent] = useState({
    user_id: userState.userData.id,
    content: "",
  });

  const getToken = localStorage.getItem("access_token");

  useEffect(() => {
    //with this, i need to always be with my state updated
    setPostContent({ ...postContent, user_id: userState.userData.id });
  }, [postContent.content]);

  return (
    <NewPostContainer>
      <TextareaWrapper>
        <ImageContainer>
          <img
            alt="profile"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8czzbrLzXJ9R_uhKyMiwj1iGxKhJtH7pwlQ&usqp=CAU"
          />
        </ImageContainer>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            createNewPost(postContent, getToken);
            setPostContent({ ...postContent, content: "" });
            getUserPostsData(getToken);
          }}
        />
        <PostContent
          maxLength={200}
          placeholder="Share something with buddies..."
          onChange={(e) =>
            setPostContent({ ...postContent, content: e.target.value })
          }
          value={postContent.content}
        >
          {children}
        </PostContent>
      </TextareaWrapper>
      <ButtonsWrapper>
        <>
          <Button
            type="submit"
            bg={"var(--green-button)"}
            onClick={(e) => {
              e.preventDefault();
              createNewPost(postContent, getToken);
              setPostContent({ ...postContent, content: "" });
              getUserPostsData(getToken);
            }}
          >
            Share
          </Button>
        </>
      </ButtonsWrapper>
    </NewPostContainer>
  );
};
export default PostArea;
