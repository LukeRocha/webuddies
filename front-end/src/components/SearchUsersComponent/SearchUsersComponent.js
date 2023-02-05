import React, { useEffect, useState } from "react";
import { searchUsersProfile } from "../../operations/operations";
import Input from "../Input/Input";
import SearchUserPreview from "../SearchUserPreview/SearchUserPreview";
import { SearchContainer, UsersReturnComponent } from "./style";

const SearchUsersComponent = ({ children }) => {
  const [nameSearch, setNameSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchUserPosts = async () => {
    const result = await searchUsersProfile(nameSearch);
    return result;
  };

  useEffect(() => {
    const fetch = async () => {
      const result = await fetchUserPosts();
      setFilteredUsers(result);
      return result;
    };

    fetch();
  }, [nameSearch]);

  return (
    <SearchContainer>
      <Input
        onChange={(e) => {
          setNameSearch(e.target.value);
        }}
        placeholder="Search Buddies..."
      />
      <UsersReturnComponent>
        {
          <div>
            {nameSearch.trim() !== "" &&
              filteredUsers.map((user, index) => {
                return <SearchUserPreview {...user} key={index} />;
              })}
          </div>
        }
      </UsersReturnComponent>
    </SearchContainer>
  );
};

export default SearchUsersComponent;
