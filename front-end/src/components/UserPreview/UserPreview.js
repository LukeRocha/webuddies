import React from "react";
import { UserContainer, ImageProfileContainer, PreviewContent } from "./styles";

const UserPreview = ({ user }) => {
  return (
    <>
      <UserContainer id={user.id}>
        <ImageProfileContainer
          alt="image"
          src={
            user.profile_picture
              ? user.profile_picture
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8czzbrLzXJ9R_uhKyMiwj1iGxKhJtH7pwlQ&usqp=CAU"
          }
        />
        <PreviewContent>
          <h2>{user.nickname}</h2>
          <p>{`${user.first_name} ${user.last_name}`}</p>
          <small>{user.status}</small>
        </PreviewContent>
      </UserContainer>
      ;
    </>
  );
};

export default UserPreview;
