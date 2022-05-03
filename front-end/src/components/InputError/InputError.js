import React from "react";
import styled from "styled-components";
const Span = styled.span`
  color: red;
  text-align: center;
`;
const InputError = ({ children }) => {
  return <Span>{children}</Span>;
};

export default InputError;
