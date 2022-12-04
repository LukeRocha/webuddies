import React, { useEffect, useState } from "react";
import SearchUsersComponent from "../components/SearchModal/SearchModal";
import Header from "../components/Header/Header";
import BottomNav from "../components/BottomNav/BottomNav";
import styled from "styled-components";

const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SearchPage = () => {
  return (
    <SearchPageContainer>
      <Header />
      <SearchUsersComponent />
      <BottomNav />
    </SearchPageContainer>
  );
};

export default SearchPage;
