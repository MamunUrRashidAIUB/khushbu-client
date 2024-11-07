import  { useState } from "react";
import Allbrands from "./Brands/Allbrands";
import BrandFilter from "./Brands/BrandFilter";

const Brands = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  // Handle brand selection
  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
  };

  // Handle price sorting
  const handlePriceFilter = (filter) => {
    setSelectedPrice(filter);
  };

  // Filter products based on selected brand and price
  const filterProducts = (products) => {
    let filteredProducts = products;

    // Filter by brand
    if (selectedBrand) {
      filteredProducts = filteredProducts.filter(
        (product) => product.brand === selectedBrand
      );
    }

    // Sort by price
    if (selectedPrice === "lowToHigh") {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (selectedPrice === "highToLow") {
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }

    return filteredProducts;
  };

  return (
    <div className="flex">
      <div className="flex-shrink-0 mx-auto">
        <BrandFilter
          onBrandSelect={handleBrandSelect}
          onPriceFilter={handlePriceFilter}
        />
      </div>
      <Allbrands filteredProducts={filterProducts} />
    </div>
  );
};

export default Brands;
