import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from MongoDB backend
    axios.get(`${API_URL}/products`)
      .then((response) => {
        // Map MongoDB _id to id for compatibility
        const mappedProducts = response.data.map(product => ({
          ...product,
          id: product._id || product.id
        }));
        setProducts(mappedProducts);
        setLoading(false);
      })
      .catch((error) => {
        setProducts([]);
        setLoading(false);
      });
  }, []);
  
  return [products, loading];
};

export default useProducts;
