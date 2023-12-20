import React from "react";
import { useSelector } from "react-redux";
import { cartTotalPrice } from "../../utils/cartSlice";

const OrderInfo = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = useSelector(cartTotalPrice);
  const discount = (totalPrice * 0.1) / 100;
  const deliveryCharge = 48;
  const platformFee = 3;
  const totalBill = totalPrice / 100 + deliveryCharge + platformFee - discount;

  //<p className="text-sm my-2">
  //You'll save ₹{parseFloat(discount).toFixed(2)} on this order 🎉
  //</p>
  return (
    <div className="basis-5/12">
       <div className="basis-5/12  p-8 rounded-md border shadow-md my-8 md:m-0 bg-white">
      <h2 className="text-xl font-bold border-b pb-4">Bill Details</h2>

      {/* order details */}
      <div className="py-4 text-lg space-y-4 border-b">
        <div className="flex justify-between items-center font-semibold">
          <p className="font-normal">Item Total ({cartItems.length})</p>
          <p>₹ {totalPrice / 100}</p>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <p className="font-normal">Discount</p>
          <p> - ₹ {parseFloat(discount).toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <p className="font-normal">Delivery Fee</p>
          <p>+ ₹ {parseFloat(deliveryCharge).toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <p className="font-normal">Platform Fee</p>
          <p>{platformFee}</p>
        </div>
      </div>
      <div className="py-4 border-b">
        <div className="md:flex justify-between items-center font-bold text-lg md:text-2xl">
          <h1>To Pay</h1>
          <h1 className="text-orange-500">
            ₹ {parseFloat(totalBill).toFixed(2)}
          </h1>
        </div>
      </div>
      <button className="w-full block mt-4 uppercase font-bold text-lg bg-orange-600 text-white text-center p-4 rounded-md">
        Secure Checkout
      </button>
    </div>
    <div className="basis-5/12 bg-blue p-8 rounded-md border shadow-md mt-8 md:m-0">

    </div>
    </div>
    
  
  );
};

export default OrderInfo;
