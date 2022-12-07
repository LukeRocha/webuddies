import styled from "styled-components";
import "../../styles.css";

export const SingleUserCardContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 8px;
  background-color: var(--inputs-background);
  border: 1px var(--modal-background) solid;
  border-radius: 4px;
`;

export const ImageProfileContainer = styled.img`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 8px;
`;

export const SingleUserData = styled.span`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: white;
`;
