import React, { useState } from "react";
import { AOneStoreData } from "../assets/Products.js";

const Categories = () => {
  const [categories, setCategories] = useState(AOneStoreData.categories);
  return (
    <div className="w-full py-8 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden"
          >
            <div className="w-full h-40">
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="py-3 bg-gray-50">
              <p className="text-center text-base font-medium text-gray-800">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
