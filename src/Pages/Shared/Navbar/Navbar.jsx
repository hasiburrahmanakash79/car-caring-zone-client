import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)
  
  const handleLogOut = () =>{
    logOut()
    .then( () => {})
    .catch(error =>{
      console.log(error);
    })
  }

  const NavItems = (
    <>
      <li><Link to="/" className="font-bold">Home</Link></li>
      <li><Link to="/about" className="font-bold">About</Link></li>
      <li><Link to="/services" className="font-bold">Services</Link></li>
      <li><Link to="/blog" className="font-bold">Blog</Link></li>
      {user?.email ? <li><Link to="/booking" className="font-bold">My Booking</Link></li> : <></>}
    </>
  );
  return (
    <div className="navbar bg-base-100 mb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FaBars></FaBars>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
           {NavItems}
          </ul>
        </div>
        <Link to="/" className=" w-14 md:w-24">
          <img src="https://i.ibb.co/d6vN6Db/logo.png" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {NavItems}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? <button onClick={handleLogOut} className="btn btn-outline btn-error">Log Out</button> : <Link to="/login" className="btn btn-outline btn-error">Log In</Link>}
      </div>
    </div>
  );
};

export default Navbar;
