import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
  const axiossecure = useAxiosSecure();

  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiossecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });

  return [cart, refetch]; // Return both `cart` and `refetch`
};

export default useCart;
