import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AdminUpload = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const axiossecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const productData = {
      name,
      brand,
      price: parseFloat(price),
      description,
      size,
      category,
    };

    try {
      const response = await axiossecure.post("/products", productData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        Swal.fire({
          title: "Success!",
          text: "Product uploaded successfully!",
          icon: "success",
        });

        setName("");
        setBrand("");
        setPrice("");
        setDescription("");
        setSize("");
        setCategory("");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to upload product";
      Swal.fire({
        title: "Error!",
        text: errorMessage,
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 p-4 md:p-8 pt-20 md:pt-24">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400 mb-2">
            Add New Product
          </h1>
          <p className="text-amber-200/70 text-lg">
            Upload a new fragrance to your catalog
          </p>
        </div>

        {/* Form Container */}
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-amber-900/30 to-amber-950/30 backdrop-blur-sm border border-amber-800/30 rounded-2xl shadow-2xl p-8 space-y-6"
        >
          {/* Product Name */}
          <div>
            <label className="block text-amber-300 font-semibold mb-2">
              Product Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Dunhill Fresh"
              className="w-full bg-amber-900/50 border-2 border-amber-700/50 text-white placeholder-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all px-4 py-3 rounded-lg"
              required
            />
          </div>

          {/* Brand */}
          <div>
            <label className="block text-amber-300 font-semibold mb-2">
              Brand *
            </label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="e.g., Dunhill"
              className="w-full bg-amber-900/50 border-2 border-amber-700/50 text-white placeholder-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all px-4 py-3 rounded-lg"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-amber-300 font-semibold mb-2">
              Price (USD) *
            </label>
            <input
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="e.g., 105.00"
              className="w-full bg-amber-900/50 border-2 border-amber-700/50 text-white placeholder-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all px-4 py-3 rounded-lg"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-amber-300 font-semibold mb-2">
              Description (min 10 chars) *
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the fragrance..."
              className="w-full bg-amber-900/50 border-2 border-amber-700/50 text-white placeholder-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all px-4 py-3 rounded-lg resize-none h-24"
              required
            />
          </div>

          {/* Size */}
          <div>
            <label className="block text-amber-300 font-semibold mb-2">
              Size *
            </label>
            <input
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              placeholder="e.g., 100ml"
              className="w-full bg-amber-900/50 border-2 border-amber-700/50 text-white placeholder-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all px-4 py-3 rounded-lg"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-amber-300 font-semibold mb-2">
              Category *
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-amber-900/50 border-2 border-amber-700/50 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all px-4 py-3 rounded-lg appearance-none cursor-pointer"
              required
            >
              <option value="">Select a category</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold py-4 rounded-lg hover:from-orange-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Uploading..." : "Upload Product"}
          </button>

          <p className="text-amber-200/60 text-sm text-center">
            All fields are required
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminUpload;
