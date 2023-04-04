import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar bg-body-tertiary nav-style">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <div className="me-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
  
        </div>
      </div>
    </nav>
  );
};

export default Header;
