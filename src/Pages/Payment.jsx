import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const Dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cartValue.cartItem);

  const subtotal = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const deliveryCharge = 40;
  const totalPayable = parseFloat(subtotal) + deliveryCharge;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
          Checkout & Payment
        </h2>

        {/* Delivery Info */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Delivery Address
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <p className="text-sm text-gray-600">Sumit Kumar</p>
            <p className="text-sm text-gray-600">
              123 Green Street, Patna, Bihar
            </p>
            <p className="text-sm text-gray-600">Phone: +91 9876543210</p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Order Summary
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <div className="flex justify-between text-sm text-gray-700 mb-1">
              <span>Items Total</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700 mb-1">
              <span>Delivery Charge</span>
              <span>₹{deliveryCharge}</span>
            </div>
            <div className="flex justify-between text-md font-bold mt-2">
              <span>Total</span>
              <span>₹{totalPayable}</span>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Payment Method
          </h3>
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" defaultChecked />
              <span className="text-gray-700">Cash on Delivery (COD)</span>
            </label>
            <label className="flex items-center gap-2 text-gray-400 cursor-not-allowed">
              <input type="radio" name="payment" disabled />
              <span>Credit / Debit Card (Coming Soon)</span>
            </label>
          </div>
        </div>

        {/* Confirm Order */}
        <button
          onClick={() => {
            alert("✅ Order placed successfully!");
            navigate("/home");
          }}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Payment;
