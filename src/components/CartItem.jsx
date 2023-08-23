import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

const CartItem = (props) => {
  const { name, image, currency, dollarPrice, nairaPrice } = props;

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
CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  dollarPrice: PropTypes.string.isRequired,
  nairaPrice: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default CartItem;
