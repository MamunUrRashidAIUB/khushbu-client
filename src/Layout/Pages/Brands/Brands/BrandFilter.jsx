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
        className="lg:hidden p-2 fixed top-20 left-4 z-50 bg-[rgba(66,42,43,255)] text-[rgba(253,223,147,255)] shadow-lg rounded-lg"
        onClick={toggleMobileFilters}
      >
        filter
      </button>

      {/* Overlay for Mobile Filters */}
      {isMobileFiltersVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMobileFilters}
        ></div>
      )}

      {/* Filter Options */}
      <div
        className={`fixed lg:static inset-y-0 left-0 transform ${
          isMobileFiltersVisible ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-50  bg-[rgba(66,42,43,255)] text-[rgba(253,223,147,255)]  w-64 p-4 shadow-lg lg:shadow-none lg:rounded-lg lg:mb-4 lg:w-full lg:max-w-xs lg:mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg`}
      >
        {/* Close Button for Mobile Filters */}
        <button
          className="lg:hidden p-2 absolute top-4 right-4 text-gray-600 hover:text-gray-900"
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

        <h2 className="text-lg font-semibold mb-4 pt-20 text-center sm:text-left">
          Filter Options
        </h2>

        {/* Brand Filter Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Brand</label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onBrandSelect(e.target.value)}
            defaultValue=""
          >
            <option value="">All Brands</option>
            {brands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Price Filter Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Sort by Price
          </label>
          <select
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onPriceFilter(e.target.value)}
            defaultValue=""
          >
            <option value="">Default</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BrandFilter;
