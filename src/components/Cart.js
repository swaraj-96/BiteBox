import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import OrderInfo from "./OrderInfo";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="bg-gray-300">
      <div className="container-max py-8 pb-1">
        <h1 className="text-2xl my-4 font-semibold">Cart</h1>
        <div className="my-2 w-1/2"></div>

        {/* cart details */}
        <div className="min-h-[60vh] pb-8 md:flex gap-8">
          {/* cart items */}
          <CartItem />
          {/* order summary */}
          {cartItems && cartItems.length !== 0 && <OrderInfo />}
        </div>
      </div>
    </div>
  );
};

export default Cart;
