import React from "react";
import { StyledLoginInputs } from "./styles";
const LoginInputs = ({ children, ...props }) => {
  return <StyledLoginInputs {...props}>{children}</StyledLoginInputs>;
};

export default LoginInputs;
