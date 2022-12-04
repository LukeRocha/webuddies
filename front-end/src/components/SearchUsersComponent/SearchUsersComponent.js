import React, { useEffect, useState } from "react";
import { searchUsersProfile } from "../../operations/operations";
import Input from "../Input/Input";
import SearchUserCard from "../SearchUserCard/SearchUserCard";
import {
  SearchContainer,
  UsersReturnComponent,
  SingleSearchUser,
} from "./style";

const SearchUsersComponent = ({ children, ...props }) => {
  const [nameSearch, setNameSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const fetchUsers = async () => {
    const result = await searchUsersProfile(nameSearch);
    return result;
  };
  useEffect(() => {
    setSearchResult(fetchUsers);
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
        <SearchUserCard {...props}></SearchUserCard>
      </UsersReturnComponent>
    </SearchContainer>
  );
};

export default SearchUsersComponent;

//write on component
//onchange brings users on component
//when i click, i grab itens and send req on DB, using nickname, it is important
// to use the existing function
