import { FaBlackberry, FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashbord = () => {
  return (
    <div className="flex bg-[rgba(66,42,43,255)] text-[rgba(253,223,147,255)] max-w-screen-xl mx-auto">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul>
          <li>
            <NavLink
              to="/dashboard/cart"
              className="flex items-center gap-2 p-2 text-black hover:text-white transition-colors"
            >
              <FaShoppingCart className="text-lg" />
              <span>My Cart</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/orders">View Admin Orders</NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/cart"
              className="flex items-center gap-2 p-2 text-black hover:text-white transition-colors"
            >
              <FaHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/cart"
              className="flex items-center gap-2 p-2 text-black hover:text-white transition-colors"
            >
              <FaBlackberry />
              <span>Add Items</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashbord;
