import React from "react";
import { StyledModal, StyledOverlay } from "./styles";
const Modal = ({ children, ...props }) => {
  return (
<StyledOverlay>
  <StyledModal {...props}>{children}</StyledModal>;
</StyledOverlay>
  )
};

export default Modal;
