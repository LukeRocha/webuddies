import React, { useEffect } from "react";
import {
  UserContainer,
  UserDataContainer,
  ImageContainer,
  UserData,
  Status,
} from "../styles";
import { useGlobalContext } from "../../../context";

const UserProfile = () => {
  const { userState, getUserDataByToken } = useGlobalContext();
  const { nickname, first_name, last_name, user_status, profile_picture } =
    userState.userData;
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    token && getUserDataByToken(token);
  }, []);

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
            <small>
              {userState.userFriendships &&
                `Follow ${userState.userFriendships.length} buddies`}
            </small>
            <Status>{`${user_status}`}</Status>
          </UserData>
        </UserDataContainer>
      </UserContainer>
    </>
  );
};

export default UserProfile;
