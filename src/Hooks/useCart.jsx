import { useQuery } from "@tanstack/react-query";
import { axiossecure } from "./useAxiosSecure";

const useCart = () => {
  // tan stack query

  const { data: cart = [] } = useQuery({
    queryKey: "cart",
    queryFn: async () => {
      const response = await axiossecure.get("/carts");
      return response.data;
    },
  });
  const totalItemCount = cart.reduce(
    (count, cartItem) => count + cartItem.items.length,
    0
  );
  return [cart, totalItemCount];
};

export default useCart;
