import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Pages/Home/Home";
import Brands from "../Layout/Pages/Brands/Brands";

import Login from "../Layout/Pages/Login/Login";
import Signup from "../Layout/Pages/Login/Signup";
import Dashbord from "../Layout/Dashbord";

import Cart from "../Layout/Pages/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "brands", element: <Brands></Brands> },
      { path: "login", element: <Login></Login> },
      { path: "signup", element: <Signup></Signup> },
    ],
  },
  {
    path: "dashboard",
    element: <Dashbord></Dashbord>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);
