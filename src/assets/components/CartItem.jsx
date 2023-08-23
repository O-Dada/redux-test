import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { increment } from "../../redux/slice/itemSlice";

const CartItem = (props) => {
  const items = useSelector((state) => state.items);
  const currency = useSelector((state) => state.currency);
  const dispatch = useDispatch();
  return (
    <div>
      <img src={props.imgSrc} />
      <p>{props.name}</p>
      <p>{props.nairaPrice}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default CartItem;