import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../../context";
import Button from "../../Button/Button";

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const UserDataContainer = styled.div`
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

const ImageContainer = styled.span`
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

const UserData = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    align-items: flex-start;
  }
`;

const Status = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  margin: 10px;
`;

const UserProfile = () => {
  const { state } = useGlobalContext();

  return (
    <>
      <UserContainer>
        <UserDataContainer>
          <ImageContainer>
            <img
              alt="profile"
              src="https://img.elo7.com.br/product/original/2FFB539/adesivo-rock-heavy-metal-black-sabbath-26x10-cor-preta-angra.jpg"
            />
          </ImageContainer>
          <UserData>
            <h2>{state.userState.userData.nickname}</h2>
            <p>
              {`${state.userState.userData.first_name}
             ${state.userState.userData.last_name}`}
            </p>
            <small>288 buddies`find in database`</small>
            <Status>
              {`user status message goes here, ${state.userState.userData.status}
              `}
            </Status>
            <Button
              style={{
                backgroundColor: "var(--purple-button)",
              }}
            >
              Follow
            </Button>
          </UserData>
        </UserDataContainer>
      </UserContainer>
    </>
  );
};

export default UserProfile;
