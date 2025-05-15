import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaSearch, FaHeart } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const profileDropdownRef = useRef(null);
  const location = useLocation();

  // Handle scroll state for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

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

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log("Searching for:", searchQuery);
    // Navigate to search results page
  };

  return (
    <header className={`sticky top-0 z-50 w-full bg-white shadow-md transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <nav className="container mx-auto max-w-[1440px] px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2">
            <img src="/ok.png" className="w-10 h-10" alt="Matrix Hub" />
            <span className="font-bold text-xl text-blue-700 hidden sm:inline-block">MatrixHub</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {["Home", "Shop", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `relative font-medium text-sm text-gray-700 transition-all duration-300 hover:text-blue-600 ${
                      isActive ? "text-blue-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-700" : ""
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Search Bar */}
          <form 
            onSubmit={handleSearch}
            className="hidden md:flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50 flex-grow max-w-md mx-4"
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 w-full focus:outline-none bg-transparent"
              aria-label="Search products"
            />
            <button 
              type="submit"
              className="px-4 py-2 text-blue-700 hover:bg-gray-200"
              aria-label="Search"
            >
              <FaSearch />
            </button>
          </form>

          {/* Right Icons */}
          <div className="flex items-center space-x-5">
            {/* Wishlist Icon */}
            <Link to="/wishlist" className="relative hidden sm:block" aria-label="Wishlist">
              <FaHeart className="text-gray-700 text-lg hover:text-red-500 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                3
              </span>
            </Link>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileDropdownRef}>
              <button
                className="flex items-center focus:outline-none"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                aria-expanded={profileDropdownOpen}
                aria-haspopup="true"
                aria-label="User profile menu"
              >
                <FaUser className="text-gray-700 text-lg hover:text-blue-600 transition-colors" />
              </button>
              
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-200">
                  <Link 
                    to="/profile" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    onClick={() => setProfileDropdownOpen(false)}
                  >
                    My Profile
                  </Link>
                  <Link 
                    to="/orders" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    onClick={() => setProfileDropdownOpen(false)}
                  >
                    My Orders
                  </Link>
                  <Link 
                    to="/wishlist" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 sm:hidden"
                    onClick={() => setProfileDropdownOpen(false)}
                  >
                    My Wishlist
                  </Link>
                  <div className="border-t border-gray-200 my-1"></div>
                  <button 
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    onClick={() => {
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
              <FaShoppingCart className="text-gray-700 text-lg hover:text-blue-600 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                2
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-gray-700" 
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
          <div className="md:hidden bg-white mt-4 rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="p-4 border-b border-gray-200">
              <div className="flex items-center bg-gray-50 border border-gray-300 rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-2 bg-transparent focus:outline-none"
                  aria-label="Search products"
                />
                <button type="submit" className="px-4 py-2 text-blue-700" aria-label="Search">
                  <FaSearch />
                </button>
              </div>
            </form>
            {/* Mobile Menu Items */}
            <ul className="divide-y divide-gray-200">
              {["Home", "Shop", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-gray-700 hover:bg-gray-100 ${
                        isActive ? "font-medium text-blue-700 bg-blue-50" : ""
                      }`
                    }
                  > 
                    {item}
                  </NavLink>
                </li>
              ))} 
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;