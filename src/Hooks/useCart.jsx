import { useQuery } from "@tanstack/react-query";
import useAxiosSecure, { axiossecure } from "./useAxiosSecure";

const useCart = (userId) => {
  // Fetch the cart data for the specific user
  const axiossecure = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", userId], // query key (should include userId for cache)
    queryFn: async () => {
      const res = await axiossecure.get("/carts");
      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCart;
