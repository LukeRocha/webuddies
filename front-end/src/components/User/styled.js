import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-align: center;
  margin: 30px;
  gap: 2px;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 100px;
    margin: 100px auto;
  }
`;

export const ImageContainer = styled.span`
  display: flex;
  margin: 15px auto 0 auto;
  width: 6rem;
  border-radius: 50%;

  @media (min-width: 600px) {
    width: 170px;
    margin: 1px;
    left: 0;
  }

  @media (min-width: 1000px) {
    margin: 0 auto;
  }
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    align-items: flex-start;
  }
`;

export const Status = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #fff;
  margin: 10px;
`;
