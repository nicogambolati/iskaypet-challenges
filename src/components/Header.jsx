import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import Logo from "./assets/Logo";
import SearchIcon from "./assets/SearchIcon";
import LoginButton from "./assets/LoginButton";
import CartButton from "./assets/CartButton";
import MenuIcon from "./assets/MenuIcon";
import HorizontalMenu from "./HorizontalMenu";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
// import About from "./About";
// import Services from "./Services";
// import Contact from "./Contact";

export default function Header() {
  return (
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
      <Router>
        <HorizontalMenu />
        <Routes>
          <Route path="/" exact component={Home} />
          {/* <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/contact" component={Contact} /> */}
        </Routes>
      </Router>
    </div>
  );
}
