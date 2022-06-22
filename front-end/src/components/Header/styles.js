import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  alignt-content: center;
  padding: 5px;
  position: fixed;
  width: 100vw;
  z-index: 100;
  background-color: var(--modal-background);
`;

export const HeaderLogo = styled.h2`
  margin: 0 auto;
  padding: 0;
  align-self: center;
  position: relative;

  color: white;
`;
