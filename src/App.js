import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import ResumePage from "./pages/ResumePage";
import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

function AppContent() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="App">
      {/* Show Navbar only after login or guest */}
      {isAuthenticated && <Navbar />}

      <main>
        <Routes>

          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={isAuthenticated ? <Navigate to="/" /> : <Signup />}
          />

          {/* Protect home route */}
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />

          <Route
            path="/roadmap/:role"
            element={isAuthenticated ? <Roadmap /> : <Navigate to="/login" />}
          />

          <Route
            path="/resume"
            element={isAuthenticated ? <ResumePage /> : <Navigate to="/login" />}
          />

        </Routes>
      </main>

      {isAuthenticated && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
