import styled from "styled-components";

export const FriendContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: center;
  }
`;
export const FriendshipPostArea = styled.div`
  display: flex;
  width: 95vw;

  position: relative;
  margin: 10px auto 80px auto;
  background-color: var(--inputs-background);
  flex-flow: column nowrap;
  justify-content: center;
  border-radius: 10px;

  @media (min-width: 600px) {
    width: 80vw;
  }
`;
