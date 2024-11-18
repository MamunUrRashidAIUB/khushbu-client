import { NavLink, Outlet } from "react-router-dom";

const Dashbord = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-full bg-orange-400">
        <ul>
          <li>
            {" "}
            <NavLink to="/dashboard/cart">My Cart</NavLink>
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
