import React from "react";
import styled from "styled-components";
const Span = styled.span`
  color: white;
`;
const InputError = ({ children }) => {
  return <span>{children}</span>;
};

export default InputError;
