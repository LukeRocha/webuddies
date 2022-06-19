import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { useGlobalContext } from "../../context";
import { createNewPost } from "../../operations/operations";
const NewPostContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 0 auto;
  background-color: var(--modal-background);
  border-radius: 8px;
  @media (min-width: 600px) {
    width: 80vw;
  }
  @media (min-width: 1200px) {
  }
`;

const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin: 20px auto 5px auto;
  padding: 8px;
  width: 75vw;
  gap: 18px;
  border-bottom: 1px solid #333;
`;

const ImageContainer = styled.span`
  display: flex;
  margin: 0 auto;
  margin: 8px auto;
  width: 2.4rem;
  border-radius: 50%;
`;

const PostContent = styled.textarea`
  width: 70vw;
  background-color: var(--inputs-background);
  color: white;
  border-radius: 10px;
  outline: none;
`;

const ButtonsWrapper = styled.div`
  width: 75vw;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  padding: 10px;
`;

const PostArea = ({ children }) => {
  const { state } = useGlobalContext();
  const [postContent, setPostContent] = useState({
    user_id: "",
    content: "",
  });
  useEffect(() => {
    setPostContent({ ...postContent, user_id: state.userState.userData.id });
    console.log(state);
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
