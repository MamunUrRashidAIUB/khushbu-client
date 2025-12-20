import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import { useState } from "react";

const Card = ({ name, image, title, brand, price, _id, variants }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiossecure = useAxiosSecure();
  const [, refetch] = useCart(user?.email);
  const [selectedVariant, setSelectedVariant] = useState(variants?.[0] || null);

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        productId: String(_id),
        email: user.email,
        name,
        image,
        price: selectedVariant ? selectedVariant.price : price,
        size: selectedVariant ? selectedVariant.size : "Default Size",
        quantity: 1,
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
          Swal.fire({
            title: "Error",
            text: error.response?.data?.message || "Failed to add to cart",
            icon: "error",
          });
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
    <div className="group bg-gradient-to-br from-amber-900 via-amber-950 to-stone-900 w-full shadow-lg rounded-2xl overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 border border-amber-800/30">
      <figure className="relative overflow-hidden bg-white/5 p-4">
        <img
          src={image}
          alt={name}
          className="rounded-xl w-full h-40 object-cover lg:h-48 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </figure>
      <div className="card-body flex flex-col items-center text-center p-4 flex-grow space-y-2">
        <h2 className="text-lg font-bold text-white overflow-hidden line-clamp-2">{name}</h2>
        <p className="text-xs text-amber-200/80 line-clamp-2">{title}</p>
        {brand && <p className="text-xs text-amber-300/70 font-semibold">{brand}</p>}
        <div className="flex items-center gap-1 mt-2">
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            ${selectedVariant ? selectedVariant.price : price}
          </span>
        </div>
        {variants && variants.length > 0 && (
          <div className="mt-2 w-full">
            <label className="block text-xs font-semibold mb-1.5 text-amber-200">Choose Size</label>
            <select
              className="w-full p-2 bg-amber-900/50 border border-amber-700/50 text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
              onChange={(e) => {
                const selected = variants.find(
                  (variant) => variant.id === parseInt(e.target.value)
                );
                setSelectedVariant(selected);
              }}
            >
              {variants.map((variant) => (
                <option key={variant.id} value={variant.id} className="bg-amber-950">
                  {variant.size} - ${variant.price}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="card-actions mt-auto pt-3 w-full">
          <button
            onClick={handleAddToCart}
            className="w-full py-2.5 px-4 text-white font-semibold rounded-full transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-green-500/50 transform hover:scale-105 active:scale-95"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
