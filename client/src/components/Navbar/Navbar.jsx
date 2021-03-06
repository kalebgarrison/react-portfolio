import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <div>
      <nav id="bar" className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">
         <strong>Kaleb Garrison</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link
              to="/about"
              className={
                location.pathname === "/about" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className={
                location.pathname === "/portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={
                location.pathname === "/contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
