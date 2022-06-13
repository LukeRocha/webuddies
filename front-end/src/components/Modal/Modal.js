import React from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 280px;
  margin: 0 auto;

  padding: 8px;
  background-color: #242424;
  border-radius: 4px;

  @media (min-width: 600px) {
    max-width: 50vw;
  }

  @media (min-width: 1200px) {
    justify-content: center;
    max-width: 70vw;
  }
`;

const Modal = ({ children, ...props }) => {
  return <StyledModal {...props}>{children}</StyledModal>;
};

export default Modal;
