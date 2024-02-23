import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import Logo from "./assets/Logo";
import SearchIcon from "./assets/SearchIcon";
import LoginButton from "./assets/LoginButton";
import CartButton from "./assets/CartButton";
import MenuIcon from "./assets/MenuIcon";
import HorizontalMenu from "./HorizontalMenu";

const Header = () => (
  <div>
    <AppBar position="static" className="header">
      <Toolbar className="d-flex justify-content-between">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <SearchIcon />
        <Logo />
        <LoginButton />
        <CartButton />
      </Toolbar>
    </AppBar>
    <HorizontalMenu />
  </div>
);

export default Header;