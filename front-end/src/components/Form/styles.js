import styled from "styled-components";

// Form Container
export const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  background-color: var(--modal-background);
  width: 90vw;
  max-width: 500px;
  margin: 0 auto;

  @media (min-width: 600px) {
    width: 70vw;
      a {
    width: auto;
    display: inline-block; /* Garante que o link se ajuste ao conteúdo */
  }
  }

  
`;

// Input Container
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6px auto;
  width: 100%;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    max-width: 400px;
  }
`;

// Select Box
export const Select = styled.select`
  margin: 12px auto;
  padding: 12px;
  width: 100%;
  max-width: 220px;
  color: white; /* Texto preto */
  background-color: #3a393e; /* Fundo branco */
  border: 1px solid black;
  border-radius: 4px;

  @media (min-width: 600px) {
    width: 100%;
  }
`;

// Label
export const Label = styled.label`
  color: #fff;
  margin: 2px 12px;
  text-align: center;
  width: 80%;

  @media (min-width: 600px) {
    text-align: left;
    width: auto;
  }
`;


export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 6px auto;
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
    gap: 6px;
  }
`;

const FormButton = styled.button`
  min-width: 120px;
  max-width: 40vw;
  padding: 10px; /* Padding ajustado para melhor aparência */
  border-radius: 4px;
  border: none;
  color: #fff;
  background-color: ${({ bg }) => (bg ? bg : "#000")};
  text-align: center; /* Centraliza o texto dentro do botão */

  @media (min-width: 600px) {
    margin: 0 5px; /* Adiciona espaço entre os botões na versão desktop */
  }
`;

export default FormButton;