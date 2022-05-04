import React from "react";
import styled from "styled-components";
import Button from "../../Button/Button";

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopUserDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px;
`;

const ImageContainer = styled.span`
  display: flex;

  margin: 4px;
  width: 20vw;
  border-radius: 50%;
`;

const UserDataBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: white;
`;

const BottomUserDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  color: white;
  padding: 20px;
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
            <Button style={{ width: "40vw", backgroundColor: "#A32FFF" }}>
              add friend
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
