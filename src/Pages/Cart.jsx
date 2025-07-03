import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cartValue.cartItem);

  const subtotal = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const savings = cartItems
    .reduce(
      (total, item) =>
        total + (item.originalPrice - item.price) * item.quantity,
      0
    )
    .toFixed(2);

  return (
    <div className="max-w-7xl mx-auto px-4">
      {cartItems.length > 0 && (
        <div>
          <h1 className="text-2xl font-bold my-4">Your Cart</h1>

          <div className="w-full px-4 py-4 bg-neutral-800 rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="text-white flex flex-col gap-1">
              <h2 className="text-xl font-semibold">
                Subtotal
                <span className="font-normal"> ({cartItems.length}): </span>
                <span className="font-bold">₹{subtotal}</span>
              </h2>
              <p className="font-semibold text-green-600 bg-gradient-to-r from-[#23262867] to-[#474a4d] px-2 rounded-md">
                Savings: <span className="font-bold">₹{savings}</span>
              </p>
            </div>
            <button className="bg-orange-600 hover:bg-orange-700 px-7 py-2 text-white text-lg rounded-md transition-all duration-300">
              Checkout
            </button>
          </div>

          <div className="hidden sm:flex justify-between px-4 py-2 text-neutral-500 font-bold border-b border-neutral-300 mb-3">
            <h1 className="w-1/4">Item</h1>
            <h2 className="w-1/4 text-center">Quantity</h2>
            <h2 className="w-1/4 text-center">Price / Unit</h2>
            <h2 className="w-1/4 text-center">Total</h2>
          </div>
        </div>
      )}

      {cartItems.length === 0 ? (
        <div className="w-full min-h-[45vh] flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl text-neutral-400 font-bold italic">
            Your Cart is Empty <br />
            <span
              className="text-orange-600 text-2xl hover:underline hover:text-orange-400 cursor-pointer duration-300 transition-all"
              onClick={() => navigate("/home")}
            >
              Shop Now
            </span>
          </h1>
        </div>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center border border-neutral-300 rounded-md p-4 mb-3 text-sm sm:text-base"
          >
            <div className="flex items-center gap-3 w-full sm:w-1/4 mb-2 sm:mb-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-neutral-500 text-xs">{item.quantityText}</p>
              </div>
            </div>

            <div className="w-full sm:w-1/4 text-left sm:text-center font-semibold mb-2 sm:mb-0">
              <span className="sm:hidden text-neutral-500">Quantity: </span>
              {item.quantity}
            </div>

            <div className="w-full sm:w-1/4 text-left sm:text-center mb-2 sm:mb-0">
              <span className="sm:hidden text-neutral-500">Price / Unit: </span>
              ₹{item.price.toFixed(2)}
            </div>

            <div className="w-full sm:w-1/4 text-left sm:text-center font-bold text-green-700">
              <span className="sm:hidden text-neutral-500">Total: </span>₹
              {(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
