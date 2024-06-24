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
              <Link to="/" id="color-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/Menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Header;
