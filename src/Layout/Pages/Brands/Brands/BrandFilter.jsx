import React, { useState } from "react";
import useProducts from "../../../../Hooks/useProducts";

const BrandFilter = ({ onBrandSelect, onPriceFilter }) => {
  const [products] = useProducts();
  const [isMobileFiltersVisible, setIsMobileFiltersVisible] = useState(false);

  // Extract unique brand names
  const brands = [...new Set(products.map((product) => product.brand))];

  // Toggle mobile filters visibility
  const toggleMobileFilters = () => {
    setIsMobileFiltersVisible(!isMobileFiltersVisible);
  };

  return (
    <div className="relative">
      {/* Mobile Filter Toggle Button */}
      <button
        className="lg:hidden p-3 fixed top-24 left-4 z-50 bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-lg rounded-full hover:shadow-orange-500/50 hover:scale-110 transition-all duration-300 font-semibold"
        onClick={toggleMobileFilters}
      >
        🔍 Filter
      </button>

      {/* Overlay for Mobile Filters */}
      {isMobileFiltersVisible && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={toggleMobileFilters}
        ></div>
      )}

      {/* Filter Options */}
      <div
        className={`fixed lg:static inset-y-0 left-0 transform ${
          isMobileFiltersVisible ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-[9999] bg-gradient-to-br from-amber-900 via-amber-950 to-stone-900 text-amber-50 w-80 max-w-[90vw] p-6 shadow-2xl lg:shadow-lg lg:rounded-2xl lg:mb-4 lg:w-full lg:max-w-sm border border-amber-800/30 overflow-y-auto`}
      >
        {/* Close Button for Mobile Filters */}
        <button
          className="lg:hidden p-2 absolute top-4 right-4 text-amber-300 hover:bg-amber-700/30 rounded-lg transition-all"
          onClick={toggleMobileFilters}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-6 pt-8 lg:pt-0 text-center lg:text-left bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
          Filter Options
        </h2>

        {/* Brand Filter Dropdown */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2 text-amber-300">Brand</label>
          <select
            className="w-full p-3 bg-amber-900/50 text-white border border-amber-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all hover:bg-amber-800/50"
            onChange={(e) => onBrandSelect(e.target.value)}
            defaultValue=""
          >
            <option value="" className="bg-amber-950">All Brands</option>
            {brands.map((brand, index) => (
              <option key={index} value={brand} className="bg-amber-950">
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Price Filter Dropdown */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-amber-300">
            Sort by Price
          </label>
          <select
            className="w-full p-3 bg-amber-900/50 text-white border border-amber-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all hover:bg-amber-800/50"
            onChange={(e) => onPriceFilter(e.target.value)}
            defaultValue=""
          >
            <option value="" className="bg-amber-950">Default</option>
            <option value="lowToHigh" className="bg-amber-950">Price: Low to High</option>
            <option value="highToLow" className="bg-amber-950">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BrandFilter;
