import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // Sample featured products
  const featuredProducts = [
    { id: 1, name: "Premium Headphones", price: 199.99, image: "/me.png" },
    { id: 2, name: "Wireless Keyboard", price: 89.99, image: "/me.png" },
    { id: 3, name: "Smart Watch", price: 249.99, image: "/me.png" },
    { id: 4, name: "Bluetooth Speaker", price: 129.99, image: "/me.png" },
  ];

  // Simple categories
  const categories = ["Audio", "Computing", "Wearables", "Smart Home"];

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white rounded-xl p-8 mb-12">
        <div className="md:flex md:items-center">
          <div className="md:w-2/3 md:pr-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Spring Sale: Up to 40% Off</h1>
            <p className="text-lg mb-6">Discover our latest collection of premium electronics.</p>
            <Link to="/shop" className="inline-block bg-white text-blue-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition">
              Shop Now
            </Link>
          </div>
          <div className="hidden md:block md:w-1/3">
            <img src="/me.png" alt="Featured Product" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>

      {/* Value Propositions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <h3 className="font-bold mb-2">Free Shipping</h3>
          <p className="text-gray-600">On orders over $50</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <h3 className="font-bold mb-2">2-Year Warranty</h3>
          <p className="text-gray-600">On all products</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <h3 className="font-bold mb-2">24/7 Support</h3>
          <p className="text-gray-600">Here to help</p>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link 
              key={category} 
              to={`/shop?category=${category.toLowerCase()}`} 
              className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-md transition"
            >
              <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <img src="/logo.svg" alt={category} className="max-w-full max-h-full" />
              </div>
              <h3 className="font-semibold">{category}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">${product.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;