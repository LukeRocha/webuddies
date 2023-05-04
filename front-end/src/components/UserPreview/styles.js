import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px;
  border-radius: 0.3rem;
  width: 50vw;
  justify-content: flex-start;
  gap: 10px;
  background-color: var(--modal-background);
  margin: 0px auto;
`;

export const ImageProfileContainer = styled.img`
  display: flex;
  border-radius: 50%;
  overflow: hidden;
  width: 3.3em;
  height: auto;
  margin: 8px;
`;

export const PreviewContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  color: white;
`;
