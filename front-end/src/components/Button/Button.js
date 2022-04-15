import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 220px;
  padding: 5px;
  margin: 0 auto;

  border-radius: 4px;
  border: none;
  color: white;
  background-color: ${({ bg }) => (bg ? bg : "black")};
`;

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
