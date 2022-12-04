import React from "react";
import {
  SingleUserCardContainer,
  ImageProfileContainer,
  SingleUserData,
} from "./style";

const SearchUserCard = ({ children, ...props }) => {
  return (
    <SingleUserCardContainer>
      <ImageProfileContainer src={props.profile_picture} />
      <SingleUserData>{children}</SingleUserData>
    </SingleUserCardContainer>
  );
};

export default SearchUserCard;
