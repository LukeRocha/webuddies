import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HomeIcon from "@mui/icons-material/Home";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { Link } from "react-router-dom";

import { BottomNavBar } from "./styled";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavBar>
      <Box
        sx={{
          display: "flex",
          margin: "0 auto",
          flexDirection: "row",
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          sx={{
            backgroundColor: "var(--modal-background)",
            color: "#fff",
            flex: "3",
          }}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            sx={{ color: "#fff" }}
            href="/profile"
            label="Home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            sx={{ color: "#fff" }}
            label="Friends"
            icon={<PeopleAltIcon />}
          />

          <BottomNavigationAction
            sx={{ color: "#fff" }}
            label="Search"
            icon={<PersonSearchIcon />}
            href="/users/search"
            variant="contained"
          />
        </BottomNavigation>
      </Box>
    </BottomNavBar>
  );
}
