import React from "react";
import { useSelector } from "react-redux";

function CartPrice() {
  const cartItems = useSelector((state) => state.items);
  const currency = useSelector((state) => state.currency);

  const totalItems = cartItems.length;
  let totalPrice = 0;

  for (const item of cartItems) {
    const price = currency === "USD" ? item.dollarPrice : item.nairaPrice;
    const numericalPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    totalPrice += numericalPrice;
  }
  return (
    <div>
      <h4>Cart</h4>
      <p>Total Items:{totalItems}</p>
      Total Price: {totalPrice.toFixed(2)} {currency}
    </div>
  );
}

export default CartPrice;
