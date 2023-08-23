import { useSelector } from "react-redux";
import "./App.css";
import CartItem from "./components/CartItem";
import items from "./items";
import CartPrice from "./components/CartPrice";
import { useDispatch } from "react-redux";
import { addItem } from "./redux/slice/itemSlice";
import { toggleCurrency } from "./redux/slice/currencySlice";

function App() {
  // const { count } = useSelector((state) => state.totals);
  const dispatch = useDispatch();
  const currentCurrency = useSelector((state) => state.currency);

  function handleToggleCurrency() {
    dispatch(toggleCurrency());
  }

  function handleAddToCart(item) {
    dispatch(addItem(item));
  }
  function itemMap(item) {
    return (
      <CartItem
        key={item.id}
        name={item.name}
        image={item.image}
        dollarPrice={item.dollarPrice}
        nairaPrice={item.nairaPrice}
        currency={currentCurrency}
        onAddToCart={() => handleAddToCart(item)}
      />
    );
  }

  return (
    <div className="container">
      <div className="cartDiv">{items.map(itemMap)}</div>
      <div>
        <CartPrice />
        <button onClick={handleToggleCurrency}>Toggle Currency</button>
      </div>
    </div>
  );
}

export default App;
