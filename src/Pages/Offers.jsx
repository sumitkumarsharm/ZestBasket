import React, { useState } from "react";
import { AOneStoreData } from "../assets/Products";

const Offers = () => {
  const [offers, setOffers] = useState(AOneStoreData.offers);
  return (
    <div className="w-full py-8 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        🔥 Exclusive Offers
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-200 transition-all duration-300 p-4 text-center"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {offer.name}
            </h3>
            <p className="text-sm bg-green-100 text-green-700 font-mono px-3 py-1 rounded-full inline-block">
              Code: {offer.coupon}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
