import React from "react";
function Footer() {
  return (
    <div>
      <div className="footer-display footer-bar">
        <div className="footer-section">
          <img
            src="./public/assets/new-logo.jpeg"
            alt="golden-logo"
            rel="noopener noreferrer"
            className="footer-logo"
          />
          <p className="footer-pg">Indian Restaurant</p>
          <p className="footer-pg">456 Heather Hill</p>
          <p className="footer-pg">Boulder, Co</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Open hours</h3>
          <br />

          <div className="footer-pg">
            <i className="fa-regular fa-clock clock-color"> </i>
            <p>Sunday: 10am to 10pm</p>
          </div>

          <div className="footer-pg">
            <i className="fa-regular fa-clock clock-color"></i>
            <p>Monday-Thursday :</p>
          </div>
          <div className="footer-pg">
            <p>10:30am-2:30pm</p>
            <p>5:30pm-10:30pm</p>
          </div>

          <div className="footer-pg">
            <i className="fa-regular fa-clock clock-color"></i>
            <p>Friday & Saturday:</p>
            <p>11am to 10:30pm</p>
          </div>
        </div>
        <div className="footer-section">
          <p className="footer-pg margin-top">We are on social media</p>
          <i className="fa-brands fa-instagram white-color margin-left"></i>
          <i className="fa-brands fa-facebook white-color"></i>
        </div>
      </div>
    </div>
  );
}
export default Footer;
