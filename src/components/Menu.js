import React from "react";
import './Menu.css';
function Menu() {
  const menuPages = [
    {
      image: "menu1.jpg",
      name: "firstMenuImage",
    },
    {
      image: "menu2.jpg",
      name: "SecondMenuImage",
    },
    {
      image: "menu3.jpg",
      name: "thirdMenuImage",
    },
  ];
  return (
    <div>
      {menuPages.map(item =>(
        <div>
        <img
          src={`images/${item.image}`}
          alt={item.name}
          className="menu"
        />
      </div>
      ))}

      {/* <div>
        <img
          src="../images/taste_of_hyderabad__3__480.png"
          alt="logo"
          className="menu-top-image"
        />
      </div> */}
      {/* <hr />
      <br />
      <hr />
      <h1 className="h1-style">vegetarian starter</h1>
      <div>
        <ul className="items">
          <li className="item">
            <p className="item-name">Vegetable Samosa (2 Pcs)</p>
            <span className="color-golden">
  
              crispy fried dumplings stuffed with potatoes
            </span>
            <span className="item-price">$2.99</span>
          </li>
          <li className="item">
            <span className="item-name">Pakora</span>
            <span className="item-price">$3.49</span>
          </li>
          {/* <!-- Add more items as needed  */}
        {/* </ul>
      </div>

      <div className="menu">
        <div className="category">
          <h2>Appetizers</h2>
          <ul className="items">
            <li className="item">
              <span className="item-name">Samosa</span>
              <span className="item-price">$2.99</span>
            </li>
            <li className="item">
              <span className="item-name">Pakora</span>
              <span className="item-price">$3.49</span>
            </li>
            {/* <!-- Add more items as needed  */}
          {/* </ul>
        </div>
        <div className="category">
          <h2>Main Course</h2>
          <ul className="items">
            <li className="item">
              <span className="item-name">Chicken Biryani</span>
              <span className="item-price">$9.99</span>
            </li>
            <li className="item">
              <span className="item-name">Vegetable Curry</span>
              <span className="item-price">$8.49</span>
            </li> */} 
            {/* //Add more items as needed
          </ul>
        </div> */}
        {/* // Add more categories as needed */}
      
    </div>
  );
}

export default Menu;
