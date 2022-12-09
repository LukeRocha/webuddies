import React from "react";
import Header from "../components/Header/Header";
import BottomNav from "../components/BottomNav/BottomNav";
import EditAccountData from "../components/EditAccountData/EditAccountData";

const EditAccount = () => {
  return (
    <>
      <Header />
      <EditAccountData />
      <BottomNav />
    </>
  );
};

export default EditAccount;
