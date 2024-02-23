import React from "react";
import searhIcon from "./assets/searchIcon.svg";

const SearchButton = () => {
  return (
    <button className="btn  search-button">
      <img src={searhIcon} alt="search" onClick={() => console.log("Search button clicked")}/>
    </button>
  );
};

export default SearchButton;