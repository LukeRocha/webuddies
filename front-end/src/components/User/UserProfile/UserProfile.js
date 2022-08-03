import React, { useEffect } from "react";
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
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <>
      <UserContainer>
        <UserDataContainer>
          <ImageContainer>
            <img
              alt="profile"
              src={
                state.userState.profilePicture
                  ? state.userState.profilePicture
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8czzbrLzXJ9R_uhKyMiwj1iGxKhJtH7pwlQ&usqp=CAU"
              }
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
