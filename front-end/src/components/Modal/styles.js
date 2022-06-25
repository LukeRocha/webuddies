import styled from "styled-components";

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 80vw;
  margin: 0 auto;

  padding: 12px;
  background-color: var(--modal-background);
  border-radius: 4px;

  @media (min-width: 600px) {
    width: 40vw;
    max-width: 350px;
  }

  @media (min-width: 1200px) {
    width: 600px;
  }
`;
