import React from "react";
import cartIcon from "./assets/cartIcon.svg";

const CartButton = () => {
  return (
    <button className="btn delete-button">
      <img src={cartIcon} alt="Cart" onClick={() => console.log("Cart button clicked")}/>
    </button>
  );
};

export default CartButton;