import { Link } from "react-router-dom";
import logo from '../../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

  const {createUser} = useContext(AuthContext)

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value
    const email = form.email.value;
    const password = form.password.value;
    console.log(name);
    
    createUser(email, password)
    .then(result =>{
      const currentUser = result.user
      console.log(currentUser);
      Swal.fire(
        'Registration in Successful',
        'You visit our service',
        'success'
      )
      form.reset()
    })
    .catch(error => console.log(error))
  };

  return (
    <div className="hero min-h-screen">
      <div className="md:flex justify-between items-center gap-12 px-3">
        <div className="md:w-1/2">
          <img src={logo} alt="" />
        </div>
        <div className="md:w-1/2 border rounded-lg bg-base-100">
          <h1 className="text-3xl text-center mt-5 font-bold">Sign Up</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-1">
              <button className="btn btn-warning">Sign Up</button>
            </div>
          </form>
          <div className="text-center mb-7">
            <p className="font-semibold">Or Sign up with</p>
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
            <Link to="/login">
              Have an account?{" "}
              <span className="text-orange-600 font-bold">Log in</span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
