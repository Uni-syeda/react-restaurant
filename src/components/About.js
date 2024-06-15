import React from "react";
import './About.css';
function About() {
  return (
    <div>
      <div className="flex-container">
        <div className="boxes">
          <img
            src="../images/Biryani.JPG"
            className="image"
            alt="img-biryani"
          />
        </div>
        <div className="boxes">
          <h2 className="heading">About Us</h2>
          <h3 className="content-style">Indian restaurant</h3>
          <p className="content-style">
            Welcome to <b>TASTE OF HYDERABAD</b>, your destination for authentic
            Hyderabadi cuisine. Inspired by the vibrant flavors of India, we're
            passionate about crafting unforgettable dining experiences that
            celebrate tradition, flavor, and community.
          </p>

          <p className="content-style">
            <strong> Our Mission</strong>
            At <b>TASTE OF HYDERABAD</b>, we're on a mission to bring the
            authentic taste of Hyderabad to USA. Our team of passionate chefs is
            dedicated to perfecting the art of Indian cooking, creating dishes
            that honor tradition while embracing innovation.
          </p>

          <p className="content-style">
            <strong>Join Us</strong>
            Join us at <strong>TASTE OF HYDERABAD</strong> and embark on a
            culinary journey through the rich and diverse flavors of India. From
            aromatic biryanis to succulent kebabs, each dish on our menu is a
            testament to our commitment to quality, authenticity, and flavor.
          </p>

          <p className="content-style">
            <strong>Contact Us</strong>
            Visit us today to experience the essence of Indian cuisine. For
            reservations or inquiries, please contact us. We look forward to
            serving you soon!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
