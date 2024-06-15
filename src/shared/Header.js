import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div>
      <nav className="nav-style">
        <div className="nav-container">
          <img
            src="../images/new-logo.jpeg"
            alt="golden-logo"
            rel="noopener noreferrer"
            className="logo-size"
          />
          <ul className="nav-list nav-display">
            <li className="nav-item">
              <Link to="/" id="color-white">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/About">About</Link>
              {/* //<a href="about.html">About</a> */}
            </li>
            <li className="nav-item">
              <Link to="/Menu">Menu</Link>
              {/* <a href="menu.html">Menu</a> */}
            </li>
            <li className="nav-item">
              <Link to="/Contact">Contact</Link>
              {/* <a href="contact.html">Contact</a> */}
            </li>
            <li className="nav-item">
              <Link to="/Login">Login</Link>
              {/* <a href="login.html">Login</a> */}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Header;
