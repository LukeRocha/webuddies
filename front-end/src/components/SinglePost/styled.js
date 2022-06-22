import styled from "styled-components";

export const PostContainer = styled.article`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin: 8px;
  padding: 12px;
  background-color: var(--modal-background);
  border-radius: 4px;
  width: auto;
`;

export const User = styled.h3`
  color: #fff;
  text-align: left;
`;

export const TimeStamp = styled.small`
  color: #fff;
  text-align: left;
  margin-bottom: 8px;
`;

export const PostContent = styled.span`
  display: flex;
  text-align: left;
  text-indent: 8px;
  color: #fff;
`;
export const PostButtons = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  width: 100vw;
  margin-top: 6px;
  justify-content: left;
  gap: 12px;
  color: var(--purple-button);
`;

export const InterfaceButton = styled.button`
  border-radius: 4px;
  width: auto;
  color: var(--purple-button);
  background: none;
  border: none;
`;
