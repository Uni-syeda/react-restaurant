import React from "react";
function Home() {
  return (
    <div>
      <div className="container-center">
        <h1>TASTE OF HYDERABAD</h1>
        <h2>Indian Restaurant</h2>
        <h2>Boulder, Co</h2>
      </div>

      <div className="container-center">
        <a href="12345678" className="button-link">
          <button type="button" className="button-styles">
            Call Us
          </button>
        </a>
        <a href="online-order.html" className="button-link">
          <button type="button" className="button-styles">
            Online Order
          </button>
        </a>
        <a href="menu.html" className="button-link">
          <button type="button" className="button-styles">
            Menu
          </button>
        </a>
      </div>

      <div className="slider">
        <div className="slide">
          <img src="./public/assets/image1.jpg" alt="Img 1" />
        </div>
        <div className="slide">
          <img src="./public/assets/image2.jpg" alt="Img 2" />
        </div>
        <div className="slide">
          <img src="./public/assets/image3.jpg" alt="Img 3" />
        </div>
        <div className="slide">
          <img src="./public/assets/image4.jpg" alt="Img 3" />
        </div>
      </div>
    </div>
  );
}

export default Home;
