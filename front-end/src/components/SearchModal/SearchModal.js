import React, { useEffect, useState } from "react";
import { searchUsersProfile } from "../../operations/operations";
import Header from "../Header/Header";
import Input from "../Input/Input";
import {
  SearchContainer,
  UsersReturnComponent,
  SingleSearchUser,
} from "./style";
const SearchUsersComponent = ({ children, ...props }) => {
  const [nameSearch, setNameSearch] = useState("");

  useEffect(() => {
    console.log(nameSearch);
  }, [nameSearch]);

  return (
    <SearchContainer>
      <Header />
      <Input
        onChange={(e) => {
          setNameSearch(e.target.value);
          searchUsersProfile(e.target.value);
        }}
        value={nameSearch}
        placeholder="Search Buddies..."
      />
      <UsersReturnComponent>
        <SingleSearchUser {...props}>{children}</SingleSearchUser>
      </UsersReturnComponent>
    </SearchContainer>
  );
};

export default SearchUsersComponent;

//write on component
//onchange brings users on component
//when i click, i grab itens and send req on DB, using nickname, it is important
// to use the existing function
