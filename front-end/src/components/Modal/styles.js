import styled from "styled-components";

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 0 auto;


  
  width: 50%;
  border: 3px solid green;
  padding: 10px;
  position: absolute;
  padding: 12px;
  background-color: var(--modal-background);
  border-radius: 4px;
  color: white;
  border: 1px solid purple;

  @media (min-width: 600px) {
    width: 40vw;
    max-width: 350px;
  }

  @media (min-width: 1200px) {
    width: 600px;
  }
`;
