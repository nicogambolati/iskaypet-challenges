import React from "react";
import trashIcon from "./assets/trashIcon.svg";

const DeleteButton = ({ onClick }) => {
  return (
    <button className="btn delete-button d-flex justify-content-center" onClick={onClick}>
      <img src={trashIcon} alt="Delete" />
    </button>
  );
};

export default DeleteButton;