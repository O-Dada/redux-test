import React from "react";
import { useSelector } from "react-redux";

function CartPrice() {
  const items = useSelector((state) => state.items);
  const currency = useSelector((state) => state.currency);

  const totalItems = items.length;
  const totalPrice = items.reduce(
    (total, item) => total + parseFloat(item.dollarPrice.slice(1)),
    0
  );
  return (
    <div>
      <h4>Cart</h4>
      <p>Total Items:{totalItems}</p>
      Total Price: {totalPrice.toFixed(2)} {currency}
    </div>
  );
}

export default CartPrice;
