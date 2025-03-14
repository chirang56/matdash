import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when ESC key is pressed
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/ok.png" className="w-12" alt="Matrix Hub" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold">
          {["Home", "About", "Services", "Shop", "Contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative text-crimson-700 dark:text-crimson-300 transition-all duration-300 ${
                    isActive ? "text-crimson-600 dark:text-crimson-400 underline" : "hover:text-blue-600"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <div className="hidden md:flex items-center border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 w-48 focus:outline-none dark:bg-gray-800 dark:text-white"
            aria-label="Search products"
          />
          <button 
            className="px-3 text-blue-900 cursor-pointer" 
            aria-label="Search"
          >
            <FaSearch />
          </button>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          {/* Profile Dropdown */}
          <div className="relative" ref={profileDropdownRef}>
            <button
              className="flex items-center focus:outline-none"
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              aria-expanded={profileDropdownOpen}
              aria-haspopup="true"
              aria-label="User profile menu"
            >
              <FaUser className="text-gray-700 dark:text-gray-300 text-lg cursor-pointer" />
            </button>
            
            {profileDropdownOpen && (
              <div className="absolute right-0 mt-3 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-50">
                <Link 
                  to="/profile" 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setProfileDropdownOpen(false)}
                >
                  Profile
                </Link>
                <Link 
                  to="/orders" 
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setProfileDropdownOpen(false)}
                >
                  Orders
                </Link>
                <button 
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => {
                    // Handle logout logic here
                    setProfileDropdownOpen(false);
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="relative" aria-label="Shopping cart with 2 items">
            <FaShoppingCart className="text-gray-700 dark:text-gray-300 text-lg" />
            <span className="absolute -top-2 -right-2 bg-crimson-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              2
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          {/* Mobile Search */}
          <div className="px-4 py-3 flex items-center border-b border-gray-200 dark:border-gray-700">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-white"
              aria-label="Search products"
            />
            <button className="ml-2 p-2 text-blue-900 dark:text-blue-400" aria-label="Search">
              <FaSearch />
            </button>
          </div>
          
          {/* Mobile Menu Items */}
          <ul className="flex flex-col py-2">
            {["Home", "About", "Services", "Shop", "Contact"].map((item) => (
              <li key={item} className="px-4 py-2">
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `block text-gray-700 dark:text-gray-300 ${
                      isActive ? "font-bold text-crimson-600 dark:text-crimson-400" : ""
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;