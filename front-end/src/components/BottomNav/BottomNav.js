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
          height: "auto",
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
          <Link to="/profile">
            <BottomNavigationAction
              sx={{ color: "#fff" }}
              icon={<HomeIcon />}
            />
          </Link>
          <Link to="/friendships">
            <BottomNavigationAction
              sx={{ color: "#fff" }}
              icon={<PeopleAltIcon />}
            />
          </Link>
          <Link to="/users/search/">
            <BottomNavigationAction
              sx={{ color: "#fff" }}
              icon={<PersonSearchIcon />}
              variant="contained"
            >
              {"Search"}
            </BottomNavigationAction>
          </Link>
        </BottomNavigation>
      </Box>
    </BottomNavBar>
  );
}
