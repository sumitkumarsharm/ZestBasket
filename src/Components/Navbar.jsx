import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cartValue.cartItem);

  return (
    <header>
      <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/home" className="text-2xl font-bold">
            ZestBasket
          </NavLink>

          {/* Hamburger Button fore Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-3xl focus:outline-none"
            >
              <FiMenu />
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:gap-4 absolute lg:static top-[65px] left-0 w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0 shadow-md lg:shadow-none z-40`}
          >
            <NavLink
              to="/home"
              className="block py-2 px-4 hover:text-neutral-600  font-semibold"
            >
              Home
            </NavLink>
            <NavLink
              to="/cotagories"
              className="block py-2 px-4 hover:text-neutral-600 font-semibold"
            >
              Cotagories
            </NavLink>
            <NavLink
              to="/offers"
              className="block py-2 px-4 hover:text-neutral-600  font-semibold"
            >
              Offer
            </NavLink>
            <NavLink
              to="/contact"
              className="block py-2 px-4 hover:text-neutral-600  font-semibold"
            >
              Contact
            </NavLink>

            {/* Buttons Mobile view stacked, Desktop aligned right */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 mt-4 lg:mt-0 lg:ml-8">
              <Link
                to="/cart"
                className="relative flex items-center gap-1 text-neutral-800  font-semibold hover:text-neutral-600 "
              >
                <BsCart3 />
                Cart({cartItems.length})
              </Link>
              <Link
                to="/"
                className="font-semibold border px-5 py-2 rounded-md bg-orange-500 text-white border-orange-500 hover:bg-white hover:text-orange-500 transition-all duration-300 ease-in-out"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
