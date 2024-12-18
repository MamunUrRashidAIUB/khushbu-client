import useProducts from "../../../../Hooks/useProducts";

const BrandFilter = ({ onBrandSelect, onPriceFilter }) => {
  const [products] = useProducts();

  // Extract unique brand names
  const brands = [...new Set(products.map((product) => product.brand))];

  return (
    <div className="flex flex-col p-4 shadow-lg rounded-lg mb-4 w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg">
      <h2 className="text-lg font-semibold mb-4 text-center sm:text-left">
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
        <label className="block text-sm font-medium mb-2">Sort by Price</label>
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
  );
};

export default BrandFilter;
