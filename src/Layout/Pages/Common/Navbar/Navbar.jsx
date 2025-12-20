import { Link } from "react-router-dom";
import img from "../Navbar/logo.png";
import { useContext, useState } from "react";
import { Authcontext } from "../../../../providers/AuthProviders";
import useCart from "../../../../Hooks/useCart";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { isAdmin } from "../../../../config/constants";

const Navbar = () => {
  const { user, logout } = useContext(Authcontext);
  const [cart] = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const handlelogout = () => {
    logout()
      .then(() => {})
      .catch(() => {
        // Logout failed - handle silently or show notification
      });
  };

  const navOptions = (
    <ul className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center w-full md:w-auto">
      <li className="relative group w-full md:w-auto">
        <Link 
          to="/" 
          className="text-white text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-yellow-300 flex items-center w-full md:w-auto"
          onClick={() => setMenuOpen(false)}
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
      </li>
      <li className="relative group w-full md:w-auto">
        <Link 
          to="/brands" 
          className="text-white text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-yellow-300 flex items-center w-full md:w-auto"
          onClick={() => setMenuOpen(false)}
        >
          Brands
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
      </li>
      <li className="relative w-full md:w-auto">
        <Link to="dashboard/cart" onClick={() => setMenuOpen(false)}>
          <button className="flex gap-2 items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-base font-semibold px-4 py-2 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 hover:scale-105 transform w-full md:w-auto">
            <FaShoppingCart className="text-xl" />
            <span>Cart</span>
            <div className="bg-pink-600 text-white text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center animate-pulse">
              {cart.length}
            </div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          {isAdmin(user.email) && (
            <>
              <li className="relative group w-full md:w-auto">
                <Link 
                  to="/admin/upload" 
                  className="text-white text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-yellow-300 flex items-center w-full md:w-auto"
                  onClick={() => setMenuOpen(false)}
                >
                  Admin Uploads
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li className="relative group w-full md:w-auto">
                <Link 
                  to="/admin/orders" 
                  className="text-white text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-yellow-300 flex items-center w-full md:w-auto"
                  onClick={() => setMenuOpen(false)}
                >
                  Admin Orders
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </>
          )}
          <li className="w-full md:w-auto">
            <button
              onClick={() => {
                handlelogout();
                setMenuOpen(false);
              }}
              className="text-white text-lg font-medium px-5 py-2 rounded-lg border-2 border-white/20 hover:border-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all duration-300 hover:scale-105 transform w-full md:w-auto"
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <li className="w-full md:w-auto">
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <button className="text-white text-lg font-medium px-5 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-pink-500/50 hover:scale-105 transform w-full md:w-auto">
              Login
            </button>
          </Link>
        </li>
      )}
    </ul>
  );

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[rgba(66,42,43,0.95)] via-[rgba(80,50,55,0.95)] to-[rgba(66,42,43,0.95)] backdrop-blur-lg text-white shadow-lg border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center group">
            <img 
              src={img} 
              alt="logo" 
              className="w-24 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 drop-shadow-lg" 
            />
          </Link>
          <div className="hidden md:flex items-center">{navOptions}</div>
          <div className="md:hidden">
            <button 
              className="text-white hover:bg-white/10 p-2 rounded-lg transition-all duration-200 hover:scale-110" 
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-[9999] bg-gradient-to-b from-[rgba(66,42,43,0.98)] to-[rgba(80,50,55,0.98)] backdrop-blur-xl w-80 max-w-[85vw] p-6 md:hidden shadow-2xl border-l border-white/10 overflow-y-auto`}
      >
        <button
          className="text-white absolute top-6 right-6 hover:bg-white/10 p-2 rounded-lg transition-all duration-200 hover:rotate-90"
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
        <div className="flex flex-col items-stretch gap-4 mt-20">
          {navOptions}
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] md:hidden transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
