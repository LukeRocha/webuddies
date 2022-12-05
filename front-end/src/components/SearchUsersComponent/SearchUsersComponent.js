import React, { useEffect, useState, useCallback } from "react";
import { searchUsersProfile } from "../../operations/operations";
import Input from "../Input/Input";
import SearchUserPreview from "../SearchUserPreview/SearchUserPreview";
import { SearchContainer, UsersReturnComponent } from "./style";

const SearchUsersComponent = ({ children, ...props }) => {
  const [nameSearch, setNameSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const users = await searchUsersProfile(nameSearch);
      console.log(users);
      setFilteredUsers(users);
      console.log(filteredUsers);
    };
    fetch();
    console.log(filteredUsers);
    return () => {};
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
          // Here we'll have the map function
        }
      </UsersReturnComponent>
    </SearchContainer>
  );
};

export default SearchUsersComponent;
