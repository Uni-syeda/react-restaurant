import React from "react";
function Header() {
  return (
    <div>
      <nav className="nav-style">
        <div className="nav-container">
          <img
            src="./public/assets/new-logo.jpeg"
            alt="golden-logo"
            rel="noopener noreferrer"
            className="logo-size"
          />
          <ul className="nav-list nav-display">
            <li className="nav-item">
              <a href="index.html" id="color-white">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="about.html">About</a>
            </li>
            <li className="nav-item">
              <a href="menu.html">Menu</a>
            </li>
            <li className="nav-item">
              <a href="contact.html">Contact</a>
            </li>
            <li className="nav-item">
              <a href="login.html">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Header;
