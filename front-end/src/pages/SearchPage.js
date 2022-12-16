import React, { useEffect, useState } from "react";
import SearchUsersComponent from "../components/SearchUsersComponent/SearchUsersComponent";
import Header from "../components/Header/Header";
import BottomNav from "../components/BottomNav/BottomNav";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SearchPage = () => {
  const { ...state } = useGlobalContext();
  console.log("search", state);
  return (
    <SearchPageContainer>
      <Header />
      <SearchUsersComponent />
      <BottomNav />
    </SearchPageContainer>
  );
};

export default SearchPage;
