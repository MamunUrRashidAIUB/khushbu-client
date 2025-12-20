import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from local Products.json
    fetch("/Products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
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
