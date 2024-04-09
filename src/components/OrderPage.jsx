


// src/components/OrderPage.jsx

import React, { useState } from "react";
import { createOrder } from "./api";

const OrderPage = () => {
  const [orderDetails, setOrderDetails] = useState({
    description: "",
    contact: "",
    pickup_location: "",
    delivery_location: "",
    delivery_time: "",
    delivery_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createOrder(orderDetails);
      // Check if response exists and contains a message property
      if (response && response.message) {
        alert(response.message);
        // Reset form fields after successful submission
        e.target.reset();
        setOrderDetails({
          description: "",
          contact: "",
          pickupLocation: "",
          deliveryLocation: "",
          deliveryTime: "",
          deliveryDate: "",
        });
      } else {
        console.log("Order placed successfully");
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <form className="space-y-4 max-w-xl mx-auto my-20" onSubmit={handleSubmit}>
      <div>
        <label className="block mb-2">Description</label>
        <input
          className="w-full p-2"
          type="text"
          name="description"
          value={orderDetails.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block mb-2">Contact</label>
        <input
          className="w-full p-2"
          type="number"
          name="contact"
          value={orderDetails.contact}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block mb-2">Pick-Up Location</label>
        <input
          className="w-full p-2"
          type="text"
          name="pickup_location"
          value={orderDetails.pickup_location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block mb-2">Delivery Location</label>
        <input
          className="w-full p-2"
          type="text"
          name="delivery_location"
          value={orderDetails.delivery_location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block mb-2">Delivery Time</label>
        <input
          className="w-full p-2"
          type="time"
          name="delivery_time"
          value={orderDetails.delivery_time}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block mb-2">Delivery Date</label>
        <input
          className="w-full p-2"
          type="date"
          name="delivery_date"
          value={orderDetails.delivery_date}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      >
        Place Order
      </button>
    </form>
  );
};

export default OrderPage;



// // src/components/OrderPage.jsx
// import React, { useState } from 'react';
// import { createOrder } from './api';

// const OrderPage = () => {
//   const [orderDetails, setOrderDetails] = useState({
//     itemType: '',
//     pickUpLocation: '',
//     collectionTime: '',
//     deliveryLocation: '',
//     contactNumber: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderDetails({ ...orderDetails, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await createOrder(orderDetails);
//       alert(response.message);
//       // Reset form fields after successful submission
//       setOrderDetails({
//         itemType: '',
//         pickUpLocation: '',
//         collectionTime: '',
//         deliveryLocation: '',
//         contactNumber: '',
//       });
//     } catch (error) {
//       console.error(error);
//       alert(error.message);
//     }
//   };

//   return (
//     <form className="space-y-4 max-w-xl mx-auto my-20" onSubmit={handleSubmit}>
//       <div>
//         <label className="block mb-2">Item Type</label>
//         <input
//           className="w-full p-2"
//           type="text"
//           name="itemType"
//           value={orderDetails.itemType}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label className="block mb-2">Pick-Up Location</label>
//         <input
//           className="w-full p-2"
//           type="text"
//           name="pickUpLocation"
//           value={orderDetails.pickUpLocation}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label className="block mb-2">Collection Time</label>
//         <input
//           className="w-full p-2"
//           type="datetime-local"
//           name="collectionTime"
//           value={orderDetails.collectionTime}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label className="block mb-2">Delivery Location</label>
//         <input
//           className="w-full p-2"
//           type="text"
//           name="deliveryLocation"
//           value={orderDetails.deliveryLocation}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label className="block mb-2">Contact Number</label>
//         <input
//           className="w-full p-2"
//           type="tel"
//           name="contactNumber"
//           value={orderDetails.contactNumber}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <button
//         type="submit"
//         className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Place Order
//       </button>
//     </form>
//   );
// };

// export default OrderPage;