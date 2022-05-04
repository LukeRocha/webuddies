import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";

const StyledUserContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 12px auto;
`;

const UserPictureContainer = styled.div`
  width: 20vw;
  display: flex;
  border-radius: 50%;
`;

const UserProfileData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  width: 70vw;
  color: white;
`;

const Profile = () => {
  return (
    <>
      <Header />
      <StyledUserContainer>
        <UserPictureContainer>
          <img
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBC8hWsBVSs0zCTL4FaTo2YJrLUd40cinpSIVnR2Y4vbeWBNq4f0STYSqriVEHgd4uI08&usqp=CAU"
          />
        </UserPictureContainer>
        <UserProfileData>
          <h2>Master</h2>
          <p>{`"Never loose balance, don't matter how far you're going"`}</p>
        </UserProfileData>
      </StyledUserContainer>
    </>
  );
};

export default Profile;
