import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  margin: 12px auto;
  padding: 12px;
  width: 220px;

  color: white;
  background-color: #3a393e;
  border: 1px solid black;
  border-radius: 4px;
`;

const Input = ({ children, ...props }) => {
  return <StyledInput {...props}>{children}</StyledInput>;
};

export default Input;
