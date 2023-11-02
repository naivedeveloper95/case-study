import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Brightness7Icon from "@mui/icons-material/Brightness7";

const Header = (props) => {
  // State to manage the theme menu
  const [anchorEl, setAnchorEl] = useState(null);

  // Function to open the theme menu
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to close the theme menu
  const closeMenu = () => {
    setAnchorEl(null);
  };

  // Function to change the theme (you would implement this logic)
  const changeTheme = (theme) => {
    // Your theme change logic here
    console.log("Changing to theme:", theme);
    props.toggleTheme();
    closeMenu();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Case Study App
        </Typography>
        <Brightness7Icon
          style={{ cursor: "pointer" }}
          color="inherit"
          aria-controls="theme-menu"
          aria-haspopup="true"
          onClick={openMenu}
        >
          <MenuIcon />
        </Brightness7Icon>
        <Menu
          id="theme-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={closeMenu}
        >
          <MenuItem onClick={() => changeTheme("light")}>Light</MenuItem>
          <MenuItem onClick={() => changeTheme("dark")}>Dark</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
