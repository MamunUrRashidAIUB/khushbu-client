import { Link } from "react-router-dom";
import img from "../Navbar/logo.png";
import { useContext, useState } from "react";
import { Authcontext } from "../../../../providers/AuthProviders";
import useCart from "../../../../Hooks/useCart";
import { FaBars, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useContext(Authcontext);
  const [cart] = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const handlelogout = () => {
    logout()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const navOptions = (
    <ul className="flex flex-col md:flex-row gap-6 md:gap-8">
      <li className="hover:text-yellow-100 transition-colors duration-200">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-yellow-100 transition-colors duration-200">
        <Link to="/brands">Brands</Link>
      </li>
      <li className="bg-yellow-400 text-black px-2 rounded-md transition-colors duration-200">
        <Link to="dashboard/cart">
          <button className="flex gap-1 items-center justify-around">
            <FaShoppingCart />
            <div className="text-pink-600">{cart.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          {user.email === "mamungolumolu@gmail.com" && (
            <>
              <li className="hover:text-yellow-100 transition-colors duration-200">
                <Link to="/admin/upload">Admin Uploads</Link>
              </li>
              <li className="hover:text-yellow-100 transition-colors duration-200">
                <Link to="/admin/orders">Admin Orders</Link>
              </li>
            </>
          )}
          <li
            onClick={handlelogout}
            className="hover:text-yellow-100 transition-colors duration-200"
          >
            Logout
          </li>
        </>
      ) : (
        <li className="hover:text-yellow-100 transition-colors duration-200">
          <Link to="/login">Login</Link>
        </li>
      )}
    </ul>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[rgba(66,42,43,255)] text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center">
          <img src={img} alt="logo" className="w-24" />
        </Link>
        <div className="hidden md:flex items-center">{navOptions}</div>
        <div className="md:hidden">
          <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </button>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center bg-[rgba(66,42,43,255)] p-4">
          {navOptions}
        </div>
      </div>
    </div>
  );
};

export default Navbar;