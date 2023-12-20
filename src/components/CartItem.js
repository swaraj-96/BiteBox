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
    <ul className="basis-7/12 bg-white md:bg-gray-200 rounded-lg md:rounded-none p-2 md:p-0">
      <button 
      onClick={() => dispatch(clearCart())}
      className="bg-btnTheme hover:bg-appTheme  text-center text-white hover:text-black hover:shadow-lg p-2 justify-center gap-2 items-center md:px-2 rounded-xl text-sm md:text-base m-2 font-semibold">
        Clear Cart
      </button>
      {cartItems &&
        cartItems.map((item) => (
          <li
            key={item?.item?.card?.info?.id}
            className="flex gap-4 justify-between max-w-[600px] my-4 bg-white  md:shadow-md p-4 border border-appTheme m-2 rounded-lg md:rounded-none md:border-none"
          >
            <div className="basis-3/12">
              <img
                className="w-full md:h-full h-auto object-cover block rounded-md aspect-square"
                src={CDN_URL + item?.item?.card?.info?.imageId}
                alt="item-image"
              />
            </div>
            <div className="basis-9/12">
              <p className="text-sm md:text-lg font-semibold">
                {item?.item?.card?.info?.name}
              </p>

              <p className="hidden md:block md:text-s md:text-gray-500">
                {item?.item?.card?.info?.description?.length > 50
                  ? item?.item?.card?.info?.description.slice(0, 50) + "..."
                  : item?.item?.card?.info?.description}
              </p>

              <p className="my-2 space-x-1 text-xs md:text-base">
                <span className="font-semibold ">
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
                <div className="flex items-center border border-solid border-appTheme">
                  <button
                    onClick={() => decreaseItem(item?.item?.card?.info?.id)}
                    disabled={item?.quantity === 1}
                    className={
                      " disabled:text-orange-500/50 disabled:cursor-not-allowed text-appTheme font-bold w-8 h-8"
                    }
                  >
                   ╶
                  </button>
                  <p className=" w-8 h-8 flex justify-center items-center text-sm text-btnTheme font-semibold">
                    {item?.quantity}
                  </p>
                  <button
                    onClick={() => increaseItem(item?.item?.card?.info?.id)}
                    className="text-btnTheme font-bold w-8 h-8"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item?.item?.card?.info?.id)}
                  className="border text-xs font-semibold text-white p-2 px-4 rounded-md bg-btnTheme hover:bg-appTheme hover:text-black hover:shadow-lg"
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
