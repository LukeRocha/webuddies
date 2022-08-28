import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { StyledHeader, HeaderLogo } from "./styles";
import { useGlobalContext } from "../../context";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const userLogout = useGlobalContext();
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
            color: "#fff",
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
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>
          <Link onClick={() => userLogout()} to="/">
            Logout
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
