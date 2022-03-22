import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HomeIcon from "@mui/icons-material/Home";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";

const BottomNavBar = styled.footer`
  width: 100vw;
  bottom: 0;
  right: 0;
  position: absolute;
  background: #242424;
  margin: 0;
`;
const ProfileAvatar = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.5;
  padding: 5px;
  right: 0;
`;
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
            label="Friends"
            icon={<PeopleAltIcon />}
          />
          <BottomNavigationAction
            sx={{ color: "white" }}
            label="Home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            sx={{ color: "white" }}
            label="Search"
            icon={<PersonSearchIcon />}
          />
        </BottomNavigation>
        <ProfileAvatar>
          <Avatar
            sx={{
              alignSelf: "center",
              width: "34px",
              height: "34px",
            }}
            alt="Lucas Rocha"
            src="https://steamuserimages-a.akamaihd.net/ugc/862858011067573132/D1081BC0AE64013D11483BE137676989279C88E9/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
          />
        </ProfileAvatar>
      </Box>
    </BottomNavBar>
  );
}
