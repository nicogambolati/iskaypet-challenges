import React from "react";
import menuIcon from "./assets/menuIcon.svg";

const MenuIcon = () => {
  return (
    <button className="btn menu-button">
      <img src={menuIcon} alt="Menu" onClick={() => console.log("Menu button clicked")}/>
    </button>
  );
};

export default MenuIcon;