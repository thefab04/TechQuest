import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import TQ_NOBG1 from "../assets/TQ_NOBG1.png"

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
      <img src={TQ_NOBG1} height="30px" width="150px"  alt="" />


      </Link>
      </div>
        <button onClick={handleLogout} className="animated-button" >Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
