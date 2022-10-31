import React from "react";
import { StyledModal } from "./styles";
const Modal = ({ children, ...props }) => {
  return <StyledModal {...props}>{children}</StyledModal>;
};

export default Modal;
