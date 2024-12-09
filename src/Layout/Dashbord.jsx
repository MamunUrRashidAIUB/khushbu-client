import { Link, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Dashbord = () => {
  return (
    <div className="flex bg-[rgba(66,42,43,255)] text-[rgba(253,223,147,255)] max-w-screen-xl mx-auto">
      <div className="w-64 min-h-screen bg-orange-400 flex  justify-center">
        <Link to="/">
          <button className="flex mt-4 items-center gap-2 bg-yellow-200 text-black p-3 rounded-lg">
            <FaHome className="text-lg" />
            Return to Shop
          </button>
        </Link>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashbord;
