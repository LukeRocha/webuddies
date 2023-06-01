import React, { useEffect, useState } from "react";
import SearchUsersComponent from "../../components/SearchUsersComponent/SearchUsersComponent";
import Header from "../../components/Header/Header";
import BottomNav from "../../components/BottomNav/BottomNav";
import { useGlobalContext } from "../../context";
import { SearchPageContainer } from "./styles";
const SearchPage = () => {
  const { ...state } = useGlobalContext();

  return (
    <SearchPageContainer>
      <Header />
      <SearchUsersComponent />
      <BottomNav />
    </SearchPageContainer>
  );
};

export default SearchPage;
