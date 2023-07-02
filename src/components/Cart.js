import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  //   const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold text-3xl">
        Cart Items - {cartItems.length}
        {/* Cart Items -{store.cart.items.length} */}
      </h1>
      <button
        className="bg-green-100 p-2 m-2"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      {cartItems.map((item) => (
        <div className="flex justify-center my-28">
          <FoodItem key={item.card.info.id} {...item.card.info} />
        </div>
      ))}
    </div>
  );
};
export default Cart;
