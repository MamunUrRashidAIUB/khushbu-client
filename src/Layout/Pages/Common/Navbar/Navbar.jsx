import { Link } from "react-router-dom";
import img from "../Navbar/logo.png";

const Navbar = () => {
  const navOptions = (
    <ul className="flex gap-6">
      <li className="hover:text-gray-300 transition-colors duration-200">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-gray-300 transition-colors duration-200">
        <Link to="/brands">Brands</Link>
      </li>
      <li className="hover:text-gray-300 transition-colors duration-200">
        <Link to="/collections">Collections</Link>
      </li>
      <li className="hover:text-gray-300 transition-colors duration-200">
        <Link to="/cart">Cart</Link>
      </li>
      <li className="hover:text-gray-300 transition-colors duration-200">
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <div className="p-2 bg-[rgba(66,42,43,255)] text-[rgba(253,223,147,255)]">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex items-center">
          <img src={img} alt="logo" className="w-24" />
        </Link>
        <div className="flex items-center">{navOptions}</div>
      </div>
    </div>
  );
};

export default Navbar;
