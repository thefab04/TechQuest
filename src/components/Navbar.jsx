import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import tplogo1 from "../assets/tplogo_white_png.png"

function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="glassnav">

        <div className="logo">
      <Link to="/">
      <img src={tplogo1} height="30px" width="150px"  alt="" />


      </Link>
      </div>
        <button onClick={handleLogout} className="animated-button" >Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
