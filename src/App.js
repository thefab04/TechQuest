import React, { useState } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";

function App() {
  const [page, setPage] = useState("login"); // default to login page

 
  return (

     <Router>
    <>
      {page !== "home" ? (
        <div>
          {page === "login" ? (
            <Login onSwitch={() => setPage("signup")} onLogin={() => setPage("home")} />
          ) : (
            <Signup onSwitch={() => setPage("login")} onSignup={() => setPage("home")} />
          )}
        </div>
      ) : (
        <div className="App">
          
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </main>
            <Footer />
          
        </div>
      )}
    </>
      </Router>
  );

}


export default App;
