import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Pages/Home/Home";
import Brands from "../Layout/Pages/Brands/Brands";

import Login from "../Layout/Pages/Login/Login";
import Signup from "../Layout/Pages/Login/Signup";
import Dashbord from "../Layout/Dashbord";

import Cart from "../Layout/Pages/Cart/Cart";
import AdminOrders from "../Layout/Pages/Admin/Order";
import AdminLogin from "../Layout/Pages/Admin/AdminLogin";
import AdminUpload from "../Layout/Pages/Admin/AdminUpload";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "brands", element: <Brands></Brands> },
      { path: "login", element: <Login></Login> },
      { path: "signup", element: <Signup></Signup> },
      { path: "admin/login", element: <AdminLogin></AdminLogin> },
      { path: "admin/orders", element: <AdminOrders></AdminOrders> },
      { path: "dashboard/cart", element: <Cart></Cart> },
      {
        path: "admin/upload",
        element: <AdminUpload />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashbord></Dashbord>,
  },
]);
