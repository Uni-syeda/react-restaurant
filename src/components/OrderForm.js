// import React, { useState } from 'react';
// import './OrderForm';
// import './OrderForm.css';

// function OrderForm() {
//   const [order, setOrder] = useState({
//     list: [
//       { menuId: '1', quantity: 0, name: 'Biryani' },
//       { menuId: '2', quantity: 0, name: 'Cake' },
//       { menuId: '3', quantity: 0, name: 'Tea' },
//     ],
//     //status: 'pending',
//     //userId: '',
//   });
//   const [message, setMessage] = useState('');

//   // const handleUserIdChange = (e) => {
//   //   setOrder({ ...order, userId: e.target.value });
//   // };

//   const handleItemChange = (id, quantity) => {
//     console.log(id, quantity);
//     const newItems = order.list.map((item) =>
//       item.menuId === id ? { ...item, quantity: parseInt(quantity) } : item
//     );
//     setOrder(prevOrder =>({ ...prevOrder, list: newItems }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8080/order', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(order),
//       });
//       if (response.ok) {
//         setMessage('Order submitted successfully!');
//         navigate('/Cart')
//       } else {
//         setMessage('Failed to submit order.');
//       }
//     } catch (error) {
//       setMessage('Error submitting order: ' + error.message);
//     }
//   };
// console.log(order);

//   return (
//     <div>
//     <h1>Order Menu</h1>
//     <form onSubmit={handleSubmit}>
//       <div>
//         <h3>Menu Items</h3>
//         {order.list.map((item) => (
//           <div key={item.menuId}>
//             <label>{item.name}</label>
//             <input
//               type="number"
//               min="1"
//               max="20"
//               value={item.quantity}
//               onChange={(e) => handleItemChange(item.menuId, e.target.value)}
//             />
//           </div>
//         ))}
//       </div>
//       <button type="submit">Submit Order</button>
//       {message && <p>{message}</p>}
//     </form>
//     </div>
//   );
// }

// export default OrderForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderForm.css";

function OrderForm() {
  const [order, setOrder] = useState({
    list: [
      { menuId: "1", quantity: 0, name: "Biryani" },
      { menuId: "2", quantity: 0, name: "Cake" },
      { menuId: "3", quantity: 0, name: "Tea" },
    ],
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleItemChange = (id, quantity) => {
    const newItems = order.list.map((item) =>
      item.menuId === id ? { ...item, quantity: parseInt(quantity) } : item
    );
    setOrder((prevOrder) => ({ ...prevOrder, list: newItems }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
      if (response.ok) {
        const result = await response.json();
        setMessage("Order submitted successfully!");
        navigate("/cart", {
          state: { message: "Order successfully placed", order: order.list },
        });
      } else {
        setMessage("Failed to submit order.");
      }
    } catch (error) {
      setMessage("Error submitting order: " + error.message);
    }
  };

  return (
    <div>
      <h1>Order Menu</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Menu Items</h3>
          {order.list.map((item) => (
            <div key={item.menuId}>
              <label>{item.name}</label>
              <input
                type="number"
                min="1"
                max="20"
                value={item.quantity}
                onChange={(e) => handleItemChange(item.menuId, e.target.value)}
              />
            </div>
          ))}
        </div>
        <button type="submit">Submit Order</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default OrderForm;
