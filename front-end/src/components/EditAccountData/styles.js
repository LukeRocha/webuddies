import styled from "styled-components";
import "../../styles.css";

export const Title = styled.h2`
  color: white;
  margin: 20px auto;
`;

export const EditAccountContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  background-color: var(--main-dark-background);
  margin: 80px auto;
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px white solid;
  border-radius: 8px;
  background-color: var(--modal-background);
  padding: 40px;
`;

export const InputWrap = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  font-size: small;
  color: white;
  margin: 2px;
`;
