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
  const { userState, accessToken } = useGlobalContext();
  const [postContent, setPostContent] = useState({
    user_id: userState.userData.id,
    content: "",
  });

  useEffect(() => {
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
              createNewPost(postContent, accessToken);
              console.log(postContent);
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
