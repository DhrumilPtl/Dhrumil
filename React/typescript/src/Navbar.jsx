import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";

export default function Protectedrouting() {
  const [login, setLogin] = useState(null);

  const islogin = () => {
    setLogin(true);
  };
  const islogout = () => {
    setLogin(true);
  };
  return (
    <center>
      <Router>
        <div>
          <h1>Hello these is Protectedrouting</h1>
          <nav style={{ textAlign: "center", marginTop: "20px" }}>
            <Route path="/" />
            <Link to="/" style={{ padding: "10px" }}>
              Home
            </Link>
            <Link to="/Profile" style={{ padding: "10px" }}>
              Profile
            </Link>
            <Link to="/About" style={{ padding: "10px" }}>
              About
            </Link>
            <Link>Login</Link>
          </nav>
          {login ? (
            <button onClick={islogout}>Logout</button>
          ) : (
            <button onClick={islogin}>Login</button>
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </center>
    // </BrowserRouter>
  );
}
