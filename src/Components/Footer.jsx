import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-[#232628]  text-white mt-7">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col  md:flex-row justify-between gap-8">
          {/* Brand Section column - 1 */}
          <div className="md:w-1/3">
            <h1 className="text-3xl font-bold">AOneStore</h1>
            <p className="text-sm text-gray-300 mb-3">A super grocery store</p>
            <ul className="space-y-1 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">About us</li>
              <li className="hover:text-white cursor-pointer">Contact us</li>
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">T&C</li>
            </ul>
          </div>

          {/* Column - 2 */}
          <div className="md:w-1/3">
            <h2 className="text-lg font-semibold mb-3">Help</h2>
            <ul className="space-y-1 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Order Status</li>
              <li className="hover:text-white cursor-pointer">Return Policy</li>
            </ul>
          </div>

          {/* Column - 3*/}
          <div className="md:w-1/3">
            <h2 className="text-lg font-semibold mb-3">Cotagory</h2>
            <ul className="space-y-1 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">
                Fruits & Veggies
              </li>
              <li className="hover:text-white cursor-pointer">
                Dairy & Bakery
              </li>
              <li className="hover:text-white cursor-pointer">Beverages</li>
              <li className="hover:text-white cursor-pointer">Snacks</li>
              <li className="hover:text-white cursor-pointer">Daily Staples</li>
            </ul>
          </div>
          {/* Column - 4*/}
          <div className="md:w-1/3">
            <h2 className="text-lg font-semibold mb-3">Follow us</h2>
            <ul className="space-y-1 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">
                <Link>Facebook</Link>
              </li>
              <li className="hover:text-white cursor-pointer">
                <Link>Instagram</Link>
              </li>
              <li className="hover:text-white cursor-pointer">
                <Link>Twitter</Link>
              </li>
              <li className="hover:text-white cursor-pointer">
                <Link>Linkedin</Link>
              </li>
              <li className="hover:text-white cursor-pointer">
                <Link>Threads</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Bottom */}
        <div className="border-t border-dashed border-gray-600 mt-8 pt-4 text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} AOneStore. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
