import React from "react";
import { Link } from "react-router-dom";
import {
  SingleUserCardContainer,
  ImageProfileContainer,
  SingleUserData,
} from "./style";

const SearchUserPreview = ({ children, ...user }) => {
  const { profile_picture, nickname, first_name, last_name, id } = user;
  return (
    <Link to={`/users/${nickname}`}>
      <SingleUserCardContainer id={id}>
        <ImageProfileContainer
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8czzbrLzXJ9R_uhKyMiwj1iGxKhJtH7pwlQ&usqp=CAU"
          }
        />
        <SingleUserData>
          <h2>{nickname}</h2>
          <h3>
            {first_name} {last_name}
          </h3>
        </SingleUserData>
      </SingleUserCardContainer>
    </Link>
  );
};

export default SearchUserPreview;
