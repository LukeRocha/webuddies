import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  alignt-content: center;
  background: #242424;
  padding: 5px;
`;

const HeaderLogo = styled.h2`
  margin: 0 auto;
  padding: 0;
  color: white;
  align-self: center;
  position: relative;
`;

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <StyledHeader>
        <HeaderLogo>weBuddies</HeaderLogo>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            color: "white",
            position: "absolute",
            right: "0",
            alignSelf: "center",
            margin: "2px",
          }}
        >
          <DensityMediumIcon />
        </Button>
      </StyledHeader>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
