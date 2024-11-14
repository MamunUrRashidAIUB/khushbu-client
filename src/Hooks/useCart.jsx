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

  return [cart];
};

export default useCart;
