// src/Layout/Pages/Admin/AdminLogin.jsx
import { useContext, useState } from "react";
import { Authcontext } from "../../../providers/AuthProviders"; // Adjust the import path as necessary
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminLogin = () => {
  const { signin } = useContext(Authcontext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signin(email, password)
      .then((result) => {
        const user = result.user;
        // Check if the user is an admin (you can implement your own logic here)
        if (user.email === "admin@example.com") {
          // Replace with your admin email
          navigate("/admin/orders"); // Redirect to admin orders page
        } else {
          Swal.fire({
            icon: "error",
            title: "Access Denied",
            text: "You are not authorized to access this page.",
          });
        }
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
