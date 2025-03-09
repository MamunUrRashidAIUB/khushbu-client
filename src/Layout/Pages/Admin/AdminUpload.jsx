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
  const axiossecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the product data as a JSON object
    const productData = {
      name,
      brand,
      price,
      description,
      size,
      category,
    };

    try {
      // Send the product data as JSON
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

        // Reset form after success
        setName("");
        setBrand("");
        setPrice("");
        setDescription("");
        setSize("");
        setCategory("");
      }
    } catch (error) {
      console.error("Error uploading product:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to upload product.",
        icon: "error",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-10">
      <div className="form-control mb-4">
        <label className="label">Product Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control mb-4">
        <label className="label">Brand</label>
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control mb-4">
        <label className="label">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control mb-4">
        <label className="label">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control mb-4">
        <label className="label">Size</label>
        <input
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control mb-4">
        <label className="label">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input input-bordered"
          required
        />
      </div>
      <button type="submit" className="btn bg-orange-500 text-white">
        Upload Product
      </button>
    </form>
  );
};

export default AdminUpload;
//admin upload need images online
//admin upload need images online
