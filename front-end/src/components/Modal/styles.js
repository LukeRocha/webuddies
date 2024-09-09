import styled from "styled-components";

// Fundo escurecido
export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro com transparência */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Estilos do modal
export const StyledModal = styled.div`
  width: 50%;
  border: 3px solid green;
  padding: 12px;
  background-color: var(--modal-background);
  border-radius: 4px;
  color: white;
  border: 1px solid purple;
  position: relative;

  @media (min-width: 600px) {
    width: 40vw;
    max-width: 350px;
  }

  @media (min-width: 1200px) {
    width: 600px;
  }

  /* Centraliza o modal na tela */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
    align-items: center; /* Centraliza o conteúdo no modal */

`;

export const StyledButton = styled.button`
  background-color: purple;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: white;
  }
`;


