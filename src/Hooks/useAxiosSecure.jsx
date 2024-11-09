import axios from "axios";

export const axiossecure = axios.create({
  baseURL: "http://localhost:3000/products",
});
const useAxiosSecure = () => {
  return axiossecure;
};

export default useAxiosSecure;
