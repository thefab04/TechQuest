import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import "../styles/components.css";
import TQ_NOBG1 from "../assets/TQ_NOBG1.png";

function Login() {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, guestLogin } = useAuth();
  


  const handleLogin = async (e) => {
    e.preventDefault();
const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
    try {
      const res = await axios.post(`${apiUrl}/api/auth/login`, {
        emailOrMobile,
        password,
      });

      login(res.data.token, res.data.user.name);
      localStorage.setItem("user",JSON.stringify(res.data.user));
      localStorage.setItem("username",res.data.user.name);
      localStorage.setItem("token",res.data.token);



      alert(res.data.message || "Login successful!");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      console.error('Login error:', err);
      alert(err.response?.data?.message || "Login failed!");
    }
  };

  const handleGuest = () => {
    guestLogin();
    alert("Logged in as Guest!");
    setTimeout(() => navigate("/"), 1500);
  };
return (

  
  
  <div className="login-page">

    

    {/* LEFT — LOGIN CARD */}
    <div className="login-container">
      <div className="glass login-card">



        <h4>Login</h4>

        <form onSubmit={handleLogin}>
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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="inputbox"
          />

          <br /><br />

          <button type="submit" className="animated-button">
            Sign In
          </button>
        </form>

        <br />

        <p>
          Don’t have an account? <Link to="/Signup">Sign up</Link>
        </p>

        <p>or</p>

        <button onClick={handleGuest} className="animated-button">
          Login as Guest
        </button>


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

export default Login;