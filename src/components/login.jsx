import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import "../styles/components.css";
import tplogo from "../assets/tplogo_white_png.png";


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
    <div className="wrap">
      <div className="glass">
        <div className="logo_login">
          <img src={tplogo} height="auto" width="150px" alt="" />
        </div>



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
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="inputbox"
          />
          <br />
          <br />
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
  );
}

export default Login;