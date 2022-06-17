import React from "react";
import styled from "styled-components";

const PostContainer = styled.section`
  display: flex;
  width: 50vw;
  margin: 0 auto;
  background-color: var(--modal-background);
`;

const PostArea = ({ children }) => {
  return (
    <>
      <PostContainer>{children}</PostContainer>
    </>
  );
};
export default PostArea;
