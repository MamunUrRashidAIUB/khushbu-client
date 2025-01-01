import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Common/Navbar/Navbar";
import Footer from "./Pages/Common/Footer/Footer";

const Main = () => {
  return (
    <div className="bg-[rgba(66,42,43,255)] text-[rgba(253,223,147,255)]  mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
