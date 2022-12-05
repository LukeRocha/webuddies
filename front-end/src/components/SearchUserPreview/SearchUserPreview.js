import React from "react";
import {
  SingleUserCardContainer,
  ImageProfileContainer,
  SingleUserData,
} from "./style";

const SearchUserPreview = ({ children, user }) => {
  const { profile_picture, nickname, first_name, last_name, id } = user;
  return (
    <SingleUserCardContainer id={id}>
      <ImageProfileContainer src={profile_picture} />
      <SingleUserData>
        <h2>{nickname}</h2>
        <h3>
          {first_name}
          {last_name}
        </h3>
      </SingleUserData>
    </SingleUserCardContainer>
  );
};

export default SearchUserPreview;
