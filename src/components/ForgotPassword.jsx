import React, { useState } from "react";
import axios from "axios";
import "../styles/components.css";

function ForgotPassword({ onClose }) {
  const [step, setStep] = useState(1); // 1: enter email, 2: enter OTP, 3: enter new password
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
  //const apiUrl = process.env.REACT_APP_API_URL || 'https://techquest-backend.onrender.com';

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      const res = await axios.post(`${apiUrl}/api/auth/forgot-password`, {
        emailOrMobile,
      });
      setMessage(res.data.message);
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP");
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      const res = await axios.post(`${apiUrl}/api/auth/verify-otp`, {
        emailOrMobile,
        otp,
      });
      setMessage(res.data.message);
      setResetToken(res.data.resetToken);
      setStep(3);
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      const res = await axios.post(`${apiUrl}/api/auth/reset-password`, {
        resetToken,
        newPassword,
      });
      setMessage(res.data.message);
      setTimeout(() => onClose(), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to reset password");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="glass" onClick={(e) => e.stopPropagation()}>
        <h4>Forgot Password</h4>
        {message && <p style={{ color: "green" }}>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {step === 1 && (
          <form onSubmit={handleSendOTP}>
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
            <button type="submit" className="animated-button">
              Send OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyOTP}>
            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="inputbox"
            />
            <br />
            <br />
            <button type="submit" className="animated-button">
              Verify OTP
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleResetPassword}>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="inputbox"
            />
            <br />
            <br />
            <button type="submit" className="animated-button">
              Reset Password
            </button>
          </form>
        )}

        <br />
        <button onClick={onClose} className="animated-button1">
          Close
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
