import React from "react";
import styled from "styled-components";
import Button from "../../Button/Button";

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-indent: 15px;

  margin-top: 30px;
`;

const TopUserDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 18px;

  @media (min-width: 600px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const ImageContainer = styled.span`
  display: flex;

  margin: 20px;
  width: 130px;
  border-radius: 50%;
`;

const UserDataBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  margin: 30px auto;
  gap: 10px;
  color: white;

  @media (min-width: 600px) {
    gap: 20px;
    margin: 0;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const BottomUserDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-itens: flex-start;
  color: white;
  padding: 20px;
  margin: 12px 16px;
  border-bottom: solid white 1px;
`;

const UserProfile = () => {
  //import json after login to render user data

  return (
    <>
      <UserContainer>
        <TopUserDiv>
          <ImageContainer>
            <img
              alt="profile"
              src="https://img.elo7.com.br/product/original/2FFB539/adesivo-rock-heavy-metal-black-sabbath-26x10-cor-preta-angra.jpg"
            />
          </ImageContainer>
          <UserDataBlock>
            <h2>Nickname</h2>
            <Button style={{ maxWidth: "40vw", backgroundColor: "#A32FFF" }}>
              Follow
            </Button>
          </UserDataBlock>
        </TopUserDiv>
        <BottomUserDiv>
          <h2>User name</h2>
          <p>user status message goes here</p>
        </BottomUserDiv>
      </UserContainer>
    </>
  );
};

export default UserProfile;
