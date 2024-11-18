import { useQuery } from "@tanstack/react-query";
import { axiossecure } from "./useAxiosSecure";

const useCart = (userId) => {
  // Fetch the cart data for the specific user
  const {
    refetch,
    data: cart = [],
    isLoading,
  } = useQuery({
    queryKey: ["cart", userId], // query key (should include userId for cache)
    queryFn: async () => {
      if (!userId) return []; // Return empty cart if no userId
      const response = await axiossecure.get(`/carts/${userId}`);
      return response.data;
    },
    enabled: !!userId, // Only run the query if a userId is available
  });

  // Calculate total item count from the 'items' array in the cart
  const totalItemCount = cart?.items?.length || 0;

  return { cart, totalItemCount, isLoading, refetch };
};

export default useCart;
