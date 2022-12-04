import React, { useEffect, useState } from "react";
import { searchUsersProfile } from "../../operations/operations";
const SearchUsersComponent = () => {
  const [nameSearch, setNameSearch] = useState("");

  useEffect(() => {
    console.log(nameSearch);
  }, [nameSearch]);

  return (
    <>
      <input
        onChange={(e) => {
          setNameSearch(e.target.value);
          searchUsersProfile(e.target.value);
        }}
        value={nameSearch}
      />
    </>
  );
};

export default SearchUsersComponent;

//write on component
//onchange brings users on component
//when i click, i grab itens and send req on DB, using nickname, it is important
// to use the existing function
