import React, { useEffect } from "react";
import {
  UserContainer,
  UserDataContainer,
  ImageContainer,
  UserData,
  Status,
} from "../styled";
import { useGlobalContext } from "../../../context";
import Button from "../../Button/Button";

const UserProfile = () => {
  const { userState, getUserDataByToken } = useGlobalContext();
  const { nickname, first_name, last_name, user_status, profile_picture } =
    userState.userData;
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    // render the user data by access token her
    token && getUserDataByToken(token);
  }, [token]);

  return (
    <>
      <UserContainer>
        <UserDataContainer>
          <ImageContainer>
            <img
              alt="profile"
              src={
                profile_picture
                  ? profile_picture
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8czzbrLzXJ9R_uhKyMiwj1iGxKhJtH7pwlQ&usqp=CAU"
              }
            />
          </ImageContainer>
          <UserData>
            <h2>{nickname}</h2>
            <p>{`${first_name} ${last_name}`}</p>
            <small>288 buddies</small>
            <Status>{`${user_status}`}</Status>
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
