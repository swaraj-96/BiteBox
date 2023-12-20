import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../../utils/cartSlice";
import { CDN_URL } from "../../utils/constants";

const CartItem = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  const increaseItem = (id) => dispatch(increaseQuantity({ id }));
  const decreaseItem = (id) => dispatch(decreaseQuantity({ id }));
  const removeItem = (id) => dispatch(removeFromCart({ id }));

  if (cartItems.length == 0) {
    return (
      <div className="flex grow min-h-[60vh] justify-center items-center">
        <p>Your cart is empty!</p>
      </div>
    );
  }
  return (
    <ul className="basis-7/12 bg-white">
      <button 
      onClick={() => dispatch(clearCart())}
      className="bg-black hover:bg-white  text-center text-white hover:text-orange-400 hover:shadow-lg p-2 justify-center gap-2 items-center md:px-2 rounded-xl text-sm md:text-base m-2">
        Clear Cart
      </button>
      {cartItems &&
        cartItems.map((item) => (
          <li
            key={item?.item?.card?.info?.id}
            className="flex gap-4 justify-between max-w-[600px] my-4"
          >
            <div className="basis-3/12">
              <img
                className="w-full h-full md:h-auto object-cover block rounded-md aspect-square"
                src={CDN_URL + item?.item?.card?.info?.imageId}
                alt="item-image"
              />
            </div>
            <div className="basis-9/12">
              <p className="text-lg font-semibold">
                {item?.item?.card?.info?.name}
              </p>

              <p className="hidden md:block">
                {item?.item?.card?.info?.description?.length > 50
                  ? item?.item?.card?.info?.description.slice(0, 50) + "..."
                  : item?.item?.card?.info?.description}
              </p>

              <p className="my-2 space-x-1">
                <span className="font-semibold">
                  ₹
                  {parseFloat(
                    (
                      parseFloat(item?.item?.itemPrice / 100) * item?.quantity
                    ).toFixed(2)
                  )}
                </span>
                <span className="text-gray-800 font-normal">
                  ({item?.item?.itemPrice / 100} × {item?.quantity})
                </span>
              </p>

              {/* actions */}
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <button
                    onClick={() => decreaseItem(item?.item?.card?.info?.id)}
                    disabled={item?.quantity === 1}
                    className={
                      "bg-orange-500 disabled:bg-orange-500/50 disabled:cursor-not-allowed text-white font-bold w-8 h-8 rounded-md"
                    }
                  >
                    -
                  </button>
                  <p className="font-bold w-8 h-8 flex justify-center items-center">
                    {item?.quantity}
                  </p>
                  <button
                    onClick={() => increaseItem(item?.item?.card?.info?.id)}
                    className="bg-orange-500 text-white font-bold w-8 h-8 rounded-md"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item?.item?.card?.info?.id)}
                  className="border border-orange-500 text-xs font-semibold text-orange-500 p-2 px-4 rounded-md"
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default CartItem;
