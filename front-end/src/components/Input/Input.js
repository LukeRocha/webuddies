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

  @media (min-width: 600px) {
    max-width: 60vw;
  }

  @media (min-width: 1200px) {
    width: auto;

    align-self: center;
  } ;
`;

const Input = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <StyledInput ref={ref} {...props}>
      {children}
    </StyledInput>
  );
});
Input.displayName = "<Input />";
export default Input;
