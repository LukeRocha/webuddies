import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  min-width: 120px;
  max-width: 40vw;
  padding: 5px;
  align-self: center;
  border-radius: 4px;
  border: none;
  color: #fff;
  align-self: right;
  background-color: ${({ bg }) => (bg ? bg : "#000")};
`;

//add larger button properties

const Button = ({ children, bg, ...props }) => {
  return (
    <>
      <StyledButton bg={bg} {...props}>
        {children}
      </StyledButton>
    </>
  );
};

export default Button;
