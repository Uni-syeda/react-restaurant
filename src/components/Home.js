import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <div>
      <div className="container-center">
        <h1>TASTE OF HYDERABAD</h1>
        <h2>Indian Restaurant</h2>
        <h2>Boulder, Co</h2>

        <Link to="12345678" className="button-link">
          <button type="button" className="button-styles">
            CallUs
          </button>
        </Link>

        <Link to="OrderForm" className="button-link">
          <button type="button" className="button-styles">
            Online Order
          </button>
        </Link>

        <Link to="/Menu" className="button-link">
          <button type="button" className="button-styles">
            Menu
          </button>
        </Link>
        {/* <a href="menu.html" className="button-link">
          
        </a> */}
      </div>

      <div className="slider">
        <div className="slide">
          <img src="../images/image1.jpg" alt="Img 1" />
        </div>
        <div className="slide">
          <img src="../images/image2.jpg" alt="Img 2" />
        </div>
        <div className="slide">
          <img src="../images/image3.jpg" alt="Img 3" />
        </div>
        <div className="slide">
          <img src="../images/image4.jpg" alt="Img 3" />
        </div>
      </div>
    </div>
  );
}

export default Home;
