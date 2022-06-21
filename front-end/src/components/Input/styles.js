import styled from "styled-components";

export const StyledInput = styled.input`
  margin: 12px auto;
  padding: 12px;
  width: 220px;

  color: white;
  background-color: #3a393e;
  border: 1px solid black;
  border-radius: 4px;

  @media (min-width: 600px) {
    max-width: 60vw;
  }

  @media (min-width: 1200px) {
    max-width: 70vw;

    align-self: center;
  } ;
`;
