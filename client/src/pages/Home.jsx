import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaRegHeart, FaHeart, FaStar, FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, name: "Premium Wireless Headphones", price: 199.99, image: "/me.png", rating: 4.8, reviews: 124, isFavorite: false },
    { id: 2, name: "Mechanical Keyboard RGB", price: 89.99, image: "/me.png", rating: 4.5, reviews: 89, isFavorite: false },
    { id: 3, name: "Smart Watch Series X", price: 249.99, image: "/me.png", rating: 4.7, reviews: 156, isFavorite: false },
    { id: 4, name: "Bluetooth Speaker Pro", price: 129.99, image: "/me.png", rating: 4.6, reviews: 98, isFavorite: false },
  ]);
  
  const [trendingProducts, setTrendingProducts] = useState([
    { id: 5, name: "Wireless Earbuds Pro", price: 149.99, image: "/me.png", rating: 4.9, reviews: 203, isFavorite: false },
    { id: 6, name: "4K Webcam", price: 79.99, image: "/me.png", rating: 4.3, reviews: 67, isFavorite: false },
    { id: 7, name: "Gaming Mouse", price: 59.99, image: "/me.png", rating: 4.7, reviews: 142, isFavorite: false },
    { id: 8, name: "Portable SSD 1TB", price: 179.99, image: "/me.png", rating: 4.8, reviews: 112, isFavorite: false },
  ]);

  const categories = [
    { id: 1, name: "Audio", icon: "/logo.svg", count: 42 },
    { id: 2, name: "Computing", icon: "/logo.svg", count: 58 },
    { id: 3, name: "Wearables", icon: "/logo.svg", count: 27 },
    { id: 4, name: "Smart Home", icon: "/logo.svg", count: 33 },
    { id: 5, name: "Cameras", icon: "/logo.svg", count: 19 },
    { id: 6, name: "Accessories", icon: "/logo.svg", count: 64 },
  ];
  
  const deals = [
    { id: 1, name: "Flash Sale", description: "24-hour deals", image: "/me.png", link: "/shop?deal=flash" },
    { id: 2, name: "Clearance", description: "Up to 70% off", image: "/me.png", link: "/shop?deal=clearance" },
    { id: 3, name: "Bundle Offers", description: "Save when you buy more", image: "/me.png", link: "/shop?deal=bundle" },
  ];

  const toggleFavorite = (id, isFromFeatured) => {
    if (isFromFeatured) {
      setFeaturedProducts(
        featuredProducts.map(product =>
          product.id === id ? { ...product, isFavorite: !product.isFavorite } : product
        )
      );
    } else {
      setTrendingProducts(
        trendingProducts.map(product =>
          product.id === id ? { ...product, isFavorite: !product.isFavorite } : product
        )
      );
    }
  };

  // Add a product to cart functionality (to be implemented with context/state management)
  const addToCart = (product) => {
    console.log(`Adding ${product.name} to cart`);
    // Implement cart functionality here
  };

  return (
    <div className="container mx-auto py-6">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-xl overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="p-8 md:w-3/5">
              <span className="inline-block bg-blue-900 bg-opacity-50 text-xs font-semibold px-3 py-1 rounded-full mb-4">LIMITED TIME OFFER</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Spring Tech Sale<br />Up to 40% Off</h1>
              <p className="text-lg md:text-xl mb-6 opacity-90">Discover our latest collection of premium electronics and elevate your tech experience.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/shop" className="inline-block bg-white text-blue-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors shadow-md">
                  Shop Now
                </Link>
                <Link to="/deals" className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-500 hover:bg-opacity-10 transition-colors">
                  View Deals
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:w-2/5 relative">
              <img src="/me.png" alt="Featured Product" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 text-blue-700 px-4 py-2 rounded-lg shadow-lg">
                <span className="line-through text-gray-500 mr-2">$299.99</span>
                <span className="font-bold text-xl">$179.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 flex items-center">
            <div className="mr-4 bg-blue-100 text-blue-700 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold mb-1">Free Shipping</h3>
              <p className="text-gray-600 text-sm">On all orders over $50</p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 flex items-center">
            <div className="mr-4 bg-blue-100 text-blue-700 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold mb-1">2-Year Warranty</h3>
              <p className="text-gray-600 text-sm">100% guarantee on all items</p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 flex items-center">
            <div className="mr-4 bg-blue-100 text-blue-700 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold mb-1">Secure Payment</h3>
              <p className="text-gray-600 text-sm">100% secure transactions</p>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 flex items-center">
            <div className="mr-4 bg-blue-100 text-blue-700 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold mb-1">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Expert assistance anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Shop by Category</h2>
          <Link to="/shop" className="text-blue-600 hover:underline flex items-center">
            View All <FaArrowRight className="ml-1" size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/shop?category=${category.name.toLowerCase()}`} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-blue-100 rounded-full p-3 group-hover:bg-blue-200 transition-colors">
                <img src={category.icon} alt={category.name} className="max-w-full max-h-full" />
              </div>
              <h3 className="font-semibold mb-1">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.count} products</p>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Special Deals Banner */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {deals.map((deal) => (
            <Link key={deal.id} to={deal.link} className="relative overflow-hidden rounded-lg group">
              <img
                src={deal.image}
                alt={deal.name}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white font-bold text-xl">{deal.name}</h3>
                <p className="text-gray-200 text-sm">{deal.description}</p>
                <span className="mt-2 text-white text-sm flex items-center">
                  Shop Now <FaArrowRight className="ml-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link to="/shop?featured=true" className="text-blue-600 hover:underline flex items-center">
            View All <FaArrowRight className="ml-1" size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition group">
              <div className="relative">
                <Link to={`/product/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                </Link>
                <button
                  onClick={() => toggleFavorite(product.id, true)}
                  className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
                  aria-label={product.isFavorite ? "Remove from wishlist" : "Add to wishlist"}
                >
                  {product.isFavorite ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart className="text-gray-400 hover:text-red-500" />
                  )}
                </button>
                {product.id === 1 && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    SALE
                  </span>
                )}
              </div>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"} />
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors flex items-center"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <FaShoppingCart /> <span className="ml-1 hidden sm:inline-block">Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="mb-12">
        <div className="bg-gray-100 rounded-lg p-8">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600">
                Stay updated with the latest products, exclusive offers, and tech news.
              </p>
            </div>
            <div className="md:w-1/2">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Trending Now</h2>
          <Link to="/shop?trending=true" className="text-blue-600 hover:underline flex items-center">
            View All <FaArrowRight className="ml-1" size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition group">
              <div className="relative">
                <Link to={`/product/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                </Link>
                <button
                  onClick={() => toggleFavorite(product.id, false)}
                  className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
                  aria-label={product.isFavorite ? "Remove from wishlist" : "Add to wishlist"}
                >
                  {product.isFavorite ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart className="text-gray-400 hover:text-red-500" />
                  )}
                </button>
                {product.id === 5 && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </span>
                )}
              </div>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold text-gray-800 mb-1 hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"} />
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors flex items-center"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <FaShoppingCart /> <span className="ml-1 hidden sm:inline-block">Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The products I received exceeded my expectations. The quality is fantastic and the shipping was incredibly fast. Will definitely shop here again!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;