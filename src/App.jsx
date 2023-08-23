import { useSelector } from "react-redux";
import "./App.css";
import CartItem from "./assets/components/CartItem";
import items from "./items";
import CartPrice from "./assets/components/CartPrice";
import { useDispatch } from "react-redux";
// import { addItem, changeCurrency } from "./redux/store";
import { addItem } from "./redux/slice/itemSlice";
import { changeCurrency } from "./redux/slice/currencySlice";

function App() {
  // const { count } = useSelector((state) => state.totals);
  const dispatch = useDispatch();
  function itemMap(item) {
    return (
      <CartItem
        key={item.id}
        name={item.name}
        imgSrc={item.image}
        dollarPrice={item.dollarPrice}
        nairaPrice={item.nairaPrice}
      />
    );
  }

  return (
    <div>
      <div className="cartDiv">{items.map(itemMap)}</div>
      <CartPrice />
    </div>
  );
}

export default App;
