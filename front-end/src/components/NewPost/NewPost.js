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
  const { state } = useGlobalContext();
  const [postContent, setPostContent] = useState({
    user_id: state.userState.userData.id,
    content: "",
  });

  useEffect(() => {
    setPostContent({ ...postContent, user_id: state.userState.userData.id });
  }, [state]);

  return (
    <NewPostContainer>
      <TextareaWrapper>
        <ImageContainer>
          <img
            alt="profile"
            src="https://img.elo7.com.br/product/original/2FFB539/adesivo-rock-heavy-metal-black-sabbath-26x10-cor-preta-angra.jpg"
          />
        </ImageContainer>
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
            bg={"var(--green-button)"}
            onClick={() => {
              createNewPost(postContent);

              setPostContent({ ...postContent, content: "" });
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
