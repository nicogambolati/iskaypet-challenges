import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./Logo";
import SearchIcon from "./SearchButton";
import LoginButton from "./LoginButton";
import CartButton from "./CartButton";
import MenuIcon from "./MenuIcon";
import HorizontalMenu from "./HorizontalMenu";

const Header = () => (
  <div>
    <AppBar position="static" className="header">
      <Toolbar className="d-flex justify-content-between">
        <MenuIcon/>
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