import React, { useState } from "react";
import { AOneStoreData } from "../assets/Products.js";
import BestSeller from "./BestSeller.jsx";
import { useDispatch } from "react-redux";
import { addToCart } from "../Feature/CartSlice.js";

const AllProduct = () => {
  const [Grocery, setGrocery] = useState(AOneStoreData.Grocery);
  const dispatch = useDispatch();
  return (
    <>
      <div className="px-3 mb-10">
        <div className="w-full p-2 bg-gray-100  max-w-7xl mx-auto rounded-md">
          {/* Header of smart basket section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-2 pb-4 gap-2">
            {/* Title */}
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">
              My Smart Basket
            </h2>

            {/* Actions: View All + Arrows */}
            <div className="flex items-center gap-2">
              <a
                href="/member/smart-basket/?nc=smart_basket"
                className="text-sm text-green-600 hover:underline font-medium"
              >
                View All
              </a>

              {/* Left Arrow (disabled) */}
              <button className="p-2 rounded opacity-50" disabled>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.829 19a.998.998 0 0 1-.78-.373l-4.828-6a1 1 0 0 1 .01-1.267l5-6a1 1 0 1 1 1.536 1.28l-4.474 5.371 4.315 5.362a1 1 0 0 1-.78 1.627Z"
                    fill="#606060"
                  />
                </svg>
              </button>

              {/* Right Arrow */}
              <button className="p-2 rounded hover:bg-gray-100 transition">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 19a1 1 0 0 1-.768-1.64l4.476-5.371-4.316-5.362a1 1 0 0 1 1.56-1.254l4.828 6a1 1 0 0 1-.011 1.267l-5 6a1 1 0 0 1-.77.36Z"
                    fill="#231F20"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Product List section*/}
          <div className="overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            <ul className="flex space-x-4 min-w-max p-2">
              {/* Product Card */}
              {Grocery.map((Data) => (
                <li key={Data.id} className="min-w-[220px] flex-shrink-0">
                  <div className="relative border border-gray-200 rounded-lg p-3 bg-white shadow-sm hover:shadow-md transition-all">
                    {/* Offer */}
                    <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                      {Data.discount}
                    </div>

                    {/* Image */}
                    <a
                      href={Data.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={Data.image}
                        alt="Capsicum Green/Shimla Mirch"
                        className="w-full h-36 object-cover rounded-md"
                      />
                    </a>

                    {/* Delivery Time */}
                    <div className="text-green-700 text-xs mt-2 flex items-center gap-1 font-semibold">
                      {/* isko remove krna hai iski jagh ham import kr lenege reacticon se */}
                      <svg
                        width="12"
                        height="12"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M2.014 6.417H.351a.327.327 0 0 1-.308-.186.317.317 0 0 1 .03-.36L4.002.194a.466.466 0 0 1 .232-.174.386.386 0 0 1 .28.011.47.47 0 0 1 .22.186.392.392 0 0 1 .059.28L4.34 4.09h2.047c.147 0 .252.066.314.198a.33.33 0 0 1-.047.372L2.34 9.836a.424.424 0 0 1-.239.15.411.411 0 0 1-.273-.022.449.449 0 0 1-.203-.186.41.41 0 0 1-.053-.28l.442-3.081Z" />
                      </svg>
                      <span>{Data.time}</span>
                    </div>

                    {/* Product Info */}
                    <div className="mt-2">
                      <h3 className="text-sm font-bold text-gray-800">
                        {Data.brand}
                      </h3>
                      <p className="text-sm text-gray-700">{Data.name}</p>
                    </div>

                    {/* Weight Selector */}
                    <div className="mt-2">
                      <button className="w-full border border-gray-300 rounded px-3 py-1 text-sm font-medium flex justify-between items-center text-gray-800">
                        {Data.quantity} {Data.unite}
                        {/* isko remove krna hai iski jagh ham import kr lenege reacticon se */}
                        <svg
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 15.5a.997.997 0 0 1-.707-.293l-4-4a.999.999 0 1 1 1.414-1.414l3.305 3.305 3.293-3.18a1 1 0 0 1 1.39 1.439l-4 3.862a.998.998 0 0 1-.695.28Z" />
                        </svg>
                      </button>
                    </div>

                    {/* Price */}
                    <div className="mt-2 flex gap-2 items-center">
                      <span className="text-lg font-bold text-black">
                        {Data.price}
                      </span>
                      <span className="text-sm line-through text-gray-500">
                        {Data.originalPrice}
                      </span>
                    </div>

                    {/* Har Din Sasta */}
                    <div className="mt-2">
                      <button className="w-full bg-green-100 text-green-800 text-sm font-semibold py-1 px-2 rounded flex justify-between items-center">
                        Har Din Sasta!
                        {/* isko remove krna hai iski jagh ham import kr lenege reacticon se */}
                        <svg
                          width="14"
                          height="14"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 15.5a1 1 0 0 1-.707-.293l-4-4a.999.999 0 1 1 1.414-1.414L12 13.086l3.293-3.293a.999.999 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 12 15.5Z" />
                        </svg>
                      </button>
                    </div>

                    {/* Add Button */}
                    <div className="mt-3">
                      <button
                        className="w-full border border-red-500 text-red-600 font-semibold py-1 rounded hover:bg-red-300"
                        onClick={() => dispatch(addToCart(Data))}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <BestSeller />
    </>
  );
};

export default AllProduct;
