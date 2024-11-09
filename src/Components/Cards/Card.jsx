import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
const Card = ({ name, image, title, brand, price }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const loaction = useLocation();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      alert("Added to cart");
    } else {
      Swal.fire({
        title: "you are not logged in",
        text: "Please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: loaction } });
        }
      });
      return;
    }
  };

  return (
    <div className="bg-amber-950 w-60 shadow-xl rounded-lg overflow-hidden flex flex-col">
      <figure className="  mx-auto pt-10">
        <img src={image} alt={name} className="rounded-xl  " />
      </figure>
      <div className="card-body flex flex-col items-center text-center p-4 flex-grow">
        <h2 className="card-title  text-lg font-semibold  overflow-hidden">
          {name}
        </h2>
        <p className="text-sm   overflow-hidden">{title}</p>
        <p className="text-sm overflow-hidden">{brand}</p>
        <p className="text-sm overflow-hidden">
          <span>Price : $</span>
          {price}
        </p>
        <div className="card-actions mt-auto">
          <button
            onClick={() => handleAddToCart(name)}
            className="bg-orange-400 p-2 text-black rounded-full"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
