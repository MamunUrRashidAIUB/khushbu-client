import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
const Login = () => {
  const { signin } = useContext(Authcontext);
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handlegooglelogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });

        // Check if the user is the admin
        if (user.email === "mamungolumolu@gmail.com") {
          navigate("/admin/orders");
        } else {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.error("Google login failed:", error.message);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Login Failed",
          text: error.message,
          showConfirmButton: true,
        });
      });
  };

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });

        // Check if the user is the admin
        if (user.email === "mamungolumolu@gmail.com") {
          // Replace with your admin email
          navigate("/admin/orders"); // Redirect to admin orders page
        } else {
          navigate(from, { replace: true }); // Redirect to user dashboard or home
        }
      })
      .catch((error) => {
        console.error("Login failed:", error.message); // Display specific error message
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Welcome Section */}
          <div className="text-center lg:text-left text-white space-y-6">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  Welcome Back
                </span>
              </h1>
              <p className="text-amber-200/70 text-lg leading-relaxed">
                Login to explore our exquisite collection of premium fragrances and manage your orders.
              </p>
            </div>
            
            <div className="space-y-4 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-600/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <p className="font-semibold text-amber-300">Premium Products</p>
                  <p className="text-amber-200/60 text-sm">Authentic fragrances collection</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-600/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <p className="font-semibold text-amber-300">Fast Delivery</p>
                  <p className="text-amber-200/60 text-sm">Quick and secure shipping</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-600/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div>
                  <p className="font-semibold text-amber-300">Secure Payment</p>
                  <p className="text-amber-200/60 text-sm">Safe transactions guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="bg-gradient-to-br from-amber-900 via-amber-950 to-stone-900 rounded-2xl p-8 shadow-2xl border border-amber-800/30">
            <h2 className="text-3xl font-bold text-white mb-2">Login</h2>
            <p className="text-amber-200/70 mb-8">Sign in to your account to continue</p>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-amber-300 font-semibold">Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="input input-bordered bg-amber-900/50 border-amber-700/50 text-white placeholder-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-amber-300 font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered bg-amber-900/50 border-amber-700/50 text-white placeholder-amber-200/40 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Remember & Forgot */}
              <div className="flex justify-between items-center">
                <label className="label cursor-pointer gap-2">
                  <input type="checkbox" className="checkbox checkbox-sm border-amber-600" />
                  <span className="label-text text-amber-200/70">Remember me</span>
                </label>
                <a href="#" className="label-text-alt link link-hover text-amber-400 hover:text-amber-300 transition-colors">
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold rounded-lg hover:from-orange-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 transform hover:scale-105 active:scale-95"
              >
                Sign In
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-amber-700/50"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gradient-to-br from-amber-900 via-amber-950 to-stone-900 text-amber-300">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Google Login */}
              <button
                onClick={handlegooglelogin}
                type="button"
                className="w-full py-3 px-4 border-2 border-amber-700/50 text-white rounded-lg hover:bg-amber-700/20 transition-all duration-300 flex items-center justify-center gap-2 font-semibold hover:border-amber-500"
              >
                <FaGoogle className="text-lg" />
                Sign in with Google
              </button>
            </form>

            {/* Signup Link */}
            <p className="text-center text-amber-200/70 mt-8">
              Don't have an account?{" "}
              <Link to="/signup" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
