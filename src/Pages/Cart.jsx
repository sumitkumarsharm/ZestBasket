import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GrSubtract } from "react-icons/gr";
import ProductImage from "../assets/ProductImage.webp";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((state) => state.cartValue.cartItem);
  console.log(cartItems);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Your Cart</h1>

      {/* Subtotal */}
      <div className="w-full px-4 py-4 bg-neutral-800 rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="text-white flex flex-col gap-1">
          <h2 className="text-xl font-semibold">
            Subtotal <span className="font-normal">(6 items):</span>{" "}
            <span className="font-bold">₹1725.99</span>
          </h2>
          <p className="font-semibold text-green-600 bg-gradient-to-r from-[#23262867] to-[#474a4d] px-2 rounded-md">
            Savings: <span className="font-bold">₹549.10</span>
          </p>
        </div>
        <button className="bg-orange-600 hover:bg-orange-700 px-7 py-2 text-white text-lg rounded-md transition-all duration-300">
          Checkout
        </button>
      </div>

      {/* Header */}
      <div className="hidden sm:flex justify-between px-4 py-2 text-neutral-500 font-bold border-b border-neutral-300 mb-3">
        <h1 className="w-1/2">Item</h1>
        <div className="w-1/2 flex justify-between">
          <h2>Quantity</h2>
          <h2>Price(₹)</h2>
        </div>
      </div>

      {/* Cart Items */}
      {cartItems.map((data) => (
        <div
          key={data.id}
          className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 border border-neutral-300 rounded-md p-4 mb-4"
        >
          <div className="flex gap-3 items-center w-full sm:w-1/2">
            <img
              src={data.image}
              alt="item"
              className="w-16 h-16 object-cover"
            />
            <p className="font-semibold">
              {data.name}
              <br />
              <span className="text-sm text-neutral-500">₹{data.price}</span>
            </p>
          </div>

          <div className="flex justify-between items-center w-full sm:w-1/2 gap-4">
            <div className="border border-neutral-400 rounded-md flex gap-2 px-2 py-1">
              <button className="px-3 text-xl hover:bg-red-500 hover:text-white rounded-md transition-all">
                <GrSubtract />
              </button>
              <span className="text-lg">1</span>
              <button className="px-3 text-xl hover:bg-red-500 hover:text-white rounded-md transition-all">
                <AiOutlinePlus />
              </button>
            </div>
            <h3 className="text-xl font-bold">₹{data.price}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
