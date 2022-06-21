import React from "react";
import StyledButton from "./styles";

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
