import React from "react";
import { StyledInput } from "./styles";

const Input = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <StyledInput ref={ref} {...props}>
      {children}
    </StyledInput>
  );
});
Input.displayName = "<Input />";
export default Input;
