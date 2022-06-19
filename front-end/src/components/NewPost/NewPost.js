import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

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

  margin: 0 auto;
  padding: 12px;
  width: 75vw;
  gap: 18px;
  border-bottom: 1px solid #555;
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
  background-color: var(--input-background);
  color: white;
  border-radius: 10px;
  outline: none;
`;

const ButtonsWrapper = styled.div`
  width: 75vw;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  padding: 20px;
`;

const PostArea = ({ children }) => {
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
        >
          {children}
        </PostContent>
      </TextareaWrapper>
      <ButtonsWrapper>
        <>
          <Button bg={"var(--purple-button)"}>Share</Button>
        </>
      </ButtonsWrapper>
    </NewPostContainer>
  );
};
export default PostArea;
