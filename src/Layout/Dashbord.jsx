import { Outlet } from "react-router-dom";

import { useContext } from "react";
import { Authcontext } from "../providers/AuthProviders";
import AdminUpload from "./Pages/Admin/AdminUpload";
import Navbar from "./Pages/Common/Navbar/Navbar";

const Dashbord = () => {
  const { user } = useContext(Authcontext);
  console.log("Current User:", user);
  return (
    <div className="flex flex-col md:flex-row bg-[rgba(66,42,43,255)] text-[rgba(253,223,147,255)] max-w-screen-xl mx-auto">
      <div className="flex-1 p-4">
        <Navbar />
        {user && user.email === "mamungolumolu@gmail.com" && <AdminUpload />}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashbord;
