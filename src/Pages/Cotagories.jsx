import React from "react";
import Fruits from "../assets/Fruits.avif";
import Vegetables from "../assets/Vegitables.jpg";
import Snacks from "../assets/Snacks.jpeg";
import HomeKitchen from "../assets/HomeKitchenEssentials.webp";
import DailyStaple from "../assets/Daily_Staple.png";
import CleaningItems from "../assets/CleaningItems.webp";
import BeautyHygiene from "../assets/BeautyHygiene.jpg";
import Braverage from "../assets/Braverage.webp";

const categories = [
  { image: Vegetables, label: "Vegetables" },
  { image: Fruits, label: "Fruits" },
  { image: Snacks, label: "Snacks" },
  { image: DailyStaple, label: "Daily Staple" },
  { image: Braverage, label: "Beverages" },
  { image: BeautyHygiene, label: "Beauty & Hygiene" },
  { image: HomeKitchen, label: "Home & Kitchen Essentials" },
  { image: CleaningItems, label: "Cleaning Items" },
];

const Categories = () => {
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
