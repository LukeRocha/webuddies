import React, { useEffect, useState, useCallback } from "react";
import { searchUsersProfile } from "../../operations/operations";
import Input from "../Input/Input";
import SearchUserPreview from "../SearchUserPreview/SearchUserPreview";
import { SearchContainer, UsersReturnComponent } from "./style";

const SearchUsersComponent = ({ children, ...props }) => {
  const [nameSearch, setNameSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchResult = async () => {
    const result = await searchUsersProfile(nameSearch);
    return result;
  };

  useEffect(() => {
    console.log("oi");
    const fetch = async () => {
      const result = await fetchResult();
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
            {nameSearch.length > 0 &&
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
