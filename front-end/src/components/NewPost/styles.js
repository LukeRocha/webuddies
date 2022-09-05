import styled from "styled-components";

export const NewPostContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 0 auto;
  background-color: var(--main-dark-background);
  border: 2px solid var(--modal-background);
  border-radius: 8px;
  @media (min-width: 600px) {
    width: 80vw;
  }
  @media (min-width: 1200px) {
  }
`;

export const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin: 20px auto 5px auto;
  padding: 8px;
  width: 75vw;
  gap: 18px;
  border-bottom: 1px solid var(--inputs-background);
`;

export const ImageContainer = styled.span`
  display: flex;
  margin: 0 auto;
  margin: 8px auto;
  width: 2.4rem;
  border-radius: 50%;
`;

export const PostContent = styled.textarea`
  width: 70vw;
  background-color: var(--inputs-background);
  color: #fff;
  border-radius: 10px;
  outline: none;
`;

export const ButtonsWrapper = styled.div`
  width: 75vw;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  padding: 10px;
`;
