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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 bg-[rgba(66,42,43,255)] w-64 p-4 md:hidden`}
      >
        <button
          className="text-white absolute top-4 left-4"
          onClick={() => setMenuOpen(false)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="flex flex-col items-start gap-6 mt-12">
          {navOptions}
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
