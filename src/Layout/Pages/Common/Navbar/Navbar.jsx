import { Link } from "react-router-dom";
import img from "../Navbar/logo.png";
import { useContext } from "react";
import { Authcontext } from "../../../../providers/AuthProviders";
import useCart from "../../../../Hooks/useCart";

const Navbar = () => {
  const { user, logout } = useContext(Authcontext);
  const [cart, totalItemCount] = useCart();

  const handlelogout = () => {
    logout()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  const navOptions = (
    <ul className="flex gap-6">
      <li className="hover:text-yellow-100 transition-colors duration-200">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-yellow-100 transition-colors duration-200">
        <Link to="/brands">Brands</Link>
      </li>
      <li className="hover:text-yellow-100 transition-colors duration-200">
        <Link to="/secret">secret</Link>
      </li>

      <li className=" bg-yellow-400 text-black px-2 rounded-md  transition-colors duration-200">
        <Link to="/cart">
          <button>
            Cart
            <div className="badge badge-secondary">{totalItemCount}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <li
            onClick={handlelogout}
            className="hover:text-yellow-100 transition-colors duration-200"
          >
            Logout
          </li>
        </>
      ) : (
        <>
          <li className="hover:text-yellow-100 transition-colors duration-200">
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </ul>
  );

  return (
    <div className="p-2 ">
      <div className="flex items-center justify-between ">
        <Link to="/" className="flex items-center">
          <img src={img} alt="logo" className="w-24" />
        </Link>
        <div className="flex items-center">{navOptions}</div>
      </div>
    </div>
  );
};

export default Navbar;
