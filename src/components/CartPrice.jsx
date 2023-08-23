import React from "react";
import { useSelector } from "react-redux";

function CartPrice() {
  return (
    <div>
      <h4>Cart</h4>
      <p>Total Items:{}</p>
      <p>Total Price:{}</p>
    </div>
  );
}

export default CartPrice;
