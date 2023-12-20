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

  return (
    <div className="basis-5/12">
      <div className=" p-8  border shadow-md my-8 md:mt-0 bg-white">
        <h3 className="text-md font-bold border-b pb-4">Bill Details</h3>

        {/* order details */}
        <div className="py-4 md:text-base text-xs space-y-2 border-b text-gray-500">
          <div className="flex justify-between items-center">
            <p className="">Item Total ({cartItems.length})</p>
            <p>₹ {totalPrice / 100}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="">Discount</p>
            <p>  ₹ {parseFloat(discount).toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center ">
            <p className="">Delivery Fee</p>
            <p> ₹ {parseFloat(deliveryCharge).toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="">Platform Fee</p>
            <p>{platformFee}</p>
          </div>
        </div>
        <div className="py-4 border-b">
          <div className="flex justify-between items-center font-bold text-s md:text-md">
            <h1>To Pay</h1>
            <h1 className="">
              ₹ {parseFloat(totalBill).toFixed(2)}
            </h1>
          </div>
        </div>
        
      </div>
      <div className="bg-FarrowBallBorrowedLight p-4  border border-green-600 shadow-md my-8 md:mt-4 items-center">
        <p className="text-base font-bold px-6 text-green-700">
          Savings of ₹{parseFloat(discount).toFixed(2)}
        </p>
      </div>
      <div className=" bg-white p-8  border shadow-md my-8 md:mt-4 items-center">
        <div className="m-4 border rounded-md">
          <h3 className="m-4 font-bold">
            Review your order details to avoid cancellations
          </h3>
          <p className="m-4 text-sm text-gray-700">
            <span className="text-orange-500">Note:</span> If you cancel within 60
            seconds of placing your order, a 100% refund will be issued. No
            refund for cancellations made after 60 seconds.
          </p>
          <p className="m-4 text-sm text-gray-700 ">Avoid cancellation as it leads to food wastage.</p>
          <button className="m-4 text-orange-700 border-b border-dashed border-orange-500">Read cancellation policy</button>
          
        </div>
        <button className=" block my-auto mx-auto uppercase font-bold text-lg bg-black text-white text-center p-4 rounded-md hover:bg-gray-200 hover:text-black hover:shadow-lg">
          Secure Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderInfo;
