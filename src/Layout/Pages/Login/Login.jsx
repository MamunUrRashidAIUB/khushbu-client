import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";
const Login = () => {
  const { signin } = useContext(Authcontext);
  const navigate = useNavigate();
  const location = useLocation();

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

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Login failed:", error.message); // Display specific error message
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered bg-yellow-950"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered bg-yellow-950"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <Link to="/signup" className="label-text-alt link link-hover">
                <span>Dont have an account? </span>
                <span className="text-green-400">Signup Now</span>
              </Link>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-950">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
