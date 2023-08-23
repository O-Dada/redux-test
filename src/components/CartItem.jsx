import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CartItem = (props) => {
  const { name, image, currency, dollarPrice, nairaPrice, onAddToCart } = props;

  const dispatch = useDispatch();

  const priceToShow = currency === "USD" ? dollarPrice : nairaPrice;
  return (
    <div>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{priceToShow}</p>
      <button onClick={props.onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default CartItem;
