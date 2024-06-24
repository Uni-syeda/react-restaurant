import React from "react";
import { useLocation } from "react-router-dom";
import './Cart.css';

const Cart = () => {
  const location = useLocation();
  const message = location.state?.message;
  const order = location.state?.order;

  return (
    <div>
      <div className="styles">
        <h1>Your Cart</h1>
        {message && <div>{message}</div>}
        {/* Display cart items here */}
        {order && order.length > 0 ? (
          <ul>
            {order.map((item) => (
              <li key={item.menuId}>
                {item.name} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in your cart.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;

// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Cart = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { order } = location.state || {};

//   if (!order || !order.list) {
//     return <p>No order details available</p>;
//   }

//   return (
//     <div>
//       <h2>Order Confirmation</h2>
//       <ul>
//         {order.list.map((item, index) => (
//           <li key={index}>
//             Name: {item.name}, Quantity: {item.quantity}
//           </li>
//         ))}
//       </ul>
//       <p>Status: {order.status}</p>
//     </div>
//   );
// };

// export default Cart;
