import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const Card = ({ name, image, title, brand, price, _id }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiossecure = useAxiosSecure();
  const [, refetch] = useCart(user?.email);

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        title,
        brand,
        price,
      };

      axiossecure
        .post("/carts", cartItem)
        .then((res) => {
          if (res.data) {
            Swal.fire({
              title: "Added to cart",
              text: "Product added to cart successfully",
              icon: "success",
              showCancelButton: false,
              confirmButtonColor: "#30d630",
              confirmButtonText: "Ok",
            });
            refetch();
          }
        })
        .catch((error) => {
          console.error("Error adding to cart:", error);
        });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#1cc475",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="bg-amber-950 w-full md:w-40 lg:w-60 shadow-xl rounded-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <figure className="mx-auto pt-5">
        <img
          src={image}
          alt={name}
          className="rounded-xl w-full h-40 object-cover lg:h-48"
        />
      </figure>
      <div className="card-body flex flex-col items-center text-center p-4 flex-grow">
        <h2 className="text-lg font-semibold overflow-hidden">{name}</h2>
        <p className="text-sm text-gray-300">{title}</p>
        <p className="text-sm text-gray-300">{brand}</p>
        <p className="text-sm font-medium text-yellow-400">
          <span>Price: $</span>
          {price}
        </p>
        <div className="card-actions mt-auto">
          <button
            onClick={handleAddToCart}
            className="p-2 px-4 text-white font-medium rounded-full transition-all duration-500 bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-400"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
