import { useForm } from "react-hook-form";
import { Authcontext } from "../../../providers/AuthProviders";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(Authcontext);
  const navigate = useNavigate(); // Initialize navigate

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Account Created Successfully",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/login"); // Redirect to login page after signup
      });
    });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered bg-yellow-950"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name")}
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered bg-yellow-950"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered bg-yellow-950"
                required
              />
              {errors.password && <span>This field is required</span>}
            </div>

            <div className="form-control mt-6">
              <input
                className="btn bg-orange-950"
                type="submit"
                value="signup"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
