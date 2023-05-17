import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  //---------------------
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  //---------------------


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire("Log in Successful", "You visit our service", "success");
        navigate(from, {replace: true}); //------
        form.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen">
      <div className="md:flex justify-between items-center gap-12 px-3">
        <div className="md:w-1/2">
          <img src={logo} alt="" />
        </div>
        <div className="md:w-1/2 border rounded-lg bg-base-100">
          <h1 className="text-3xl text-center mt-5 font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
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
                placeholder="enter your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-1">
              <button className="btn btn-warning">Login</button>
            </div>
          </form>
          <div className="text-center mb-7">
            <p className="font-semibold">Or Sign In with</p>
            <div className="flex items-center justify-center gap-4 my-4">
              <button>
                <img
                  src="https://i.ibb.co/7z0WMdz/image.png"
                  alt=""
                  className="w-6"
                />
              </button>
              <button>
                <img
                  src="https://i.ibb.co/0q2w0Ry/image.png"
                  alt=""
                  className="w-6"
                />
              </button>
              <button>
                <img
                  src="https://i.ibb.co/KjQdbSD/image.png"
                  alt=""
                  className="w-6"
                />
              </button>
            </div>
            <Link to="/register">
              Do not have an account?{" "}
              <span className="text-orange-600 font-bold">Sign Up</span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
