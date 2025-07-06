import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { User } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const cartItems = useSelector((state) => state.cartValue.cartItem);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("aonestoreCurrentUser"));
    setUser(storedUser);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("aonestoreCurrentUser");
    setUser(null);
    setShowDropdown(false);
    navigate("/");
  };

  return (
    <header>
      <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <NavLink to="/home" className="text-2xl font-bold">
            AOneStore
          </NavLink>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-3xl focus:outline-none"
            >
              <FiMenu />
            </button>
          </div>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:gap-4 absolute lg:static top-[65px] left-0 w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0 shadow-md lg:shadow-none z-40`}
          >
            <NavLink
              to="/home"
              className="block py-2 px-4 hover:text-neutral-600 font-semibold"
              onClick={handleNavClick}
            >
              Home
            </NavLink>
            <NavLink
              to="/categories"
              className="block py-2 px-4 hover:text-neutral-600 font-semibold"
              onClick={handleNavClick}
            >
              Categories
            </NavLink>
            <NavLink
              to="/offers"
              className="block py-2 px-4 hover:text-neutral-600 font-semibold"
              onClick={handleNavClick}
            >
              Offer
            </NavLink>
            <NavLink
              to="/contact"
              className="block py-2 px-4 hover:text-neutral-600 font-semibold"
              onClick={handleNavClick}
            >
              Contact
            </NavLink>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 mt-4 lg:mt-0 lg:ml-8">
              <Link
                to="/cart"
                className="relative flex items-center gap-1 text-neutral-800 font-semibold hover:text-neutral-600"
                onClick={handleNavClick}
              >
                <BsCart3 />
                Cart({cartItems.length})
              </Link>

              {/* User Profile Icon */}
              {user ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowDropdown((prev) => !prev)}
                    className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
                  >
                    <User className="w-5 h-5" />
                  </button>

                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded shadow-md z-50 lg:translate-x-[30%] translate-x-[70%]">
                      <p className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 border-b text-center">
                        {user.username}
                      </p>
                      <button
                        onClick={handleLogout}
                        className="w-full text-center px-4 py-2 text-sm hover:bg-gray-300"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/"
                  onClick={handleNavClick}
                  className="font-semibold border px-5 py-2 rounded-md bg-orange-500 text-white border-orange-500 hover:bg-white hover:text-orange-500 transition-all duration-300 ease-in-out"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
