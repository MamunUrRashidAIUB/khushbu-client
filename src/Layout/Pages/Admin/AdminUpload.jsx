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
  const [image, setImage] = useState(null);
  const axiossecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("brand", brand);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("size", size);
    formData.append("category", category);
    formData.append("image", image);

    try {
      const response = await axiossecure.post("/products", formData);
      if (response.data.success) {
        Swal.fire({
          title: "Success!",
          text: "Product uploaded successfully!",
          icon: "success",
        });
        // Reset form
        setName("");
        setBrand("");
        setPrice("");
        setDescription("");
        setSize("");
        setCategory("");
        setImage(null);
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
      <div className="form-control mb-4">
        <label className="label">Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
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
