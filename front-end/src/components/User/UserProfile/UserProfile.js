import React from "react";
import {
  UserContainer,
  UserDataContainer,
  ImageContainer,
  UserData,
  Status,
} from "./styled";
import { useGlobalContext } from "../../../context";
import Button from "../../Button/Button";

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
