import { Link, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useContext } from "react";
import { Authcontext } from "../providers/AuthProviders";
import AdminUpload from "./Pages/Admin/AdminUpload";

const Dashbord = () => {
  const { user } = useContext(Authcontext);

  return (
    <div className="flex flex-col md:flex-row bg-[rgba(66,42,43,255)] text-[rgba(253,223,147,255)] max-w-screen-xl mx-auto">
      <div className="w-full md:w-64 min-h-screen bg-orange-400 flex justify-center md:justify-start">
        <Link to="/">
          <button className="flex mt-4 items-center gap-2 bg-yellow-200 text-black p-3 rounded-lg">
            <FaHome className="text-lg" />
            Return to Shop
          </button>
        </Link>
      </div>
      <div className="flex-1 p-4">
        {user && user.email === "mr9374247@gmail.com" && <AdminUpload />}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashbord;
