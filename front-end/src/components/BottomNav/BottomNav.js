import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HomeIcon from "@mui/icons-material/Home";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import Avatar from "@mui/material/Avatar";

import { BottomNavBar, ProfileAvatar } from "./styled";

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
            backgroundColor: "#242424",
            color: "white",
            flex: "3",
          }}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            sx={{ color: "white" }}
            label="Home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            sx={{ color: "white" }}
            label="Friends"
            icon={<PeopleAltIcon />}
          />
          <BottomNavigationAction
            sx={{ color: "white" }}
            label="Search"
            icon={<PersonSearchIcon />}
          />
        </BottomNavigation>
      </Box>
    </BottomNavBar>
  );
}
