import styled, { css } from "styled-components";

export const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-self: center;
  margin: 0 auto;
  padding: 12px;
  background-color: var(--modal-background);
  @media (min-width: 900px) {
  }

  @media (min-width: 1200px) {
    width: 40vw;
    justify-content: center;
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 6px auto;
  align-self: center;
  align-content: center;

  @media (min-width: 600px) {
    text-align: left;
    align-items: center;
    padding: 12px;
  }

  @media (min-width: 900px) {
    margin: 20px auto;
  }
`;

export const Select = styled.select`
  margin: 12px auto;
  padding: 12px;
  width: 220px;

  color: #fff;
  background-color: var(--inputs-background);
  border: 1px solid #000;
  border-radius: 4px;

  @media (min-width: 480px) {
    width: 230px;
  }
`;

export const Label = styled.label`
  color: #fff;
  margin: 2px 12px;
  text-align: left;
`;
