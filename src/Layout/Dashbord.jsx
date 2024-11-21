import { NavLink, Outlet } from "react-router-dom";

const Dashbord = () => {
  return (
    <div className="flex bg-[rgba(66,42,43,255)] text-[rgba(253,223,147,255)] max-w-screen-xl mx-auto">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul>
          <li className="text-black">
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
