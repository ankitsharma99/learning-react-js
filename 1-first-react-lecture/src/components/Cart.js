import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  //   console.log(cartItems);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="font-bold text-3xl">Cart Page</h1>
      <button className="bg-green-100" onClick={() => handleClearCart()}>
        Clear Cart
      </button>
      {/* <FoodItem {...cartItems[0]} /> */}
      <div className="flex">
        {cartItems.map((cartItem) => {
          // console.log(cartItem);
          return <FoodItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
    </div>
  );
};
export default Cart;
