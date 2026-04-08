import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import TQ_NOBG1 from "../assets/TQ_NOBG1.png";

function Signup() {
  const [name, setName] = useState("");
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
const res = await axios.post(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/auth/signup`, {
        name,
        emailOrMobile,
        password,
      });

      alert(res.data.message || "Account created successfully!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed!");
    }
  };

return (
  <div className="login-page">

    {/* LEFT — SIGNUP CARD */}
    <div className="login-container">
      <div className="glass login-card">

        <h4>Create Account</h4>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="inputbox"
          />

          <br /><br />

          <input
            type="text"
            placeholder="Email or Mobile"
            value={emailOrMobile}
            onChange={(e) => setEmailOrMobile(e.target.value)}
            required
            className="inputbox"
          />

          <br /><br />

          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="inputbox"
          />

          <br /><br />

          <button type="submit" className="animated-button">
            Sign Up
          </button>

        </form>

        <br />

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>


    {/* RIGHT — INFO PANEL */}
    <div className="login-info">

            <div className="logo_login">
          <img src={  TQ_NOBG1 } width="250px" alt="" />
        </div>

<h2>Welcome to TechQuest</h2>
            <h4>Every click brings you one step closer to success.</h4>
          
          


<ul className="features">
  <li> Structured tech learning roadmaps</li>
  <li> Beginner-friendly guided paths</li>
  <li> Learn skills that match real careers</li>
  <li> Build resumes easily</li>
</ul>
    </div>


  </div>
);
}

export default Signup;
