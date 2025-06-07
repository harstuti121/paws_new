// import React, { useContext } from "react";
// import { CartContext } from "./CartContext";

// const Cart = () => {
//   const { cartItems } = useContext(CartContext);

//   return (
//     <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
//       <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🛒 Your Shopping Cart</h2>
      
//       {cartItems.length === 0 ? (
//         <p className="text-gray-600 text-center">Your cart is empty. Start shopping now!</p>
//       ) : (
//         <div>
//           <ul>
//             {cartItems.map((item, index) => (
//               <li key={index} className="flex items-center justify-between bg-gray-100 p-4 mb-3 rounded-md shadow-sm">
//                 <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
//                 <div className="ml-4 flex-1">
//                   <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
//                   <p className="text-gray-500">Price: <span className="text-green-600 font-bold">₹{item.price}</span></p>
//                 </div>
//                 <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Remove ❌</button>
//               </li>
//             ))}
//           </ul>
//           <div className="flex justify-between items-center mt-6 border-t pt-4">
//             <h3 className="text-xl font-bold">Total: ₹{cartItems.reduce((total, item) => total + item.price, 0)}</h3>
//             <button className="bg-yellow-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-yellow-600 transition">
//               Proceed to Checkout 🛍️
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

// import React, { useContext } from "react";
// import { CartContext } from "./CartContext";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY"); // Replace with your actual public key

// const Cart = () => {
//   const { cartItems } = useContext(CartContext);

//   const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

//   const handleCheckout = async () => {
//     const response = await fetch("http://localhost:5000/api/create-checkout-session", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ items: cartItems }),
//     });

//     const data = await response.json();
//     window.location.href = data.url; // Redirect to Stripe Checkout page
//   };

//   return (
//     <Elements stripe={stripePromise}>
//       <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🛒 Your Shopping Cart</h2>

//         {cartItems.length === 0 ? (
//           <p className="text-gray-600 text-center">Your cart is empty. Start shopping now!</p>
//         ) : (
//           <div>
//             <ul>
//               {cartItems.map((item, index) => (
//                 <li key={index} className="flex items-center justify-between bg-gray-100 p-4 mb-3 rounded-md shadow-sm">
//                   <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
//                   <div className="ml-4 flex-1">
//                     <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
//                     <p className="text-gray-500">
//                       Price: <span className="text-green-600 font-bold">₹{item.price}</span>
//                     </p>
//                   </div>
//                   <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
//                     Remove ❌
//                   </button>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex justify-between items-center mt-6 border-t pt-4">
//               <h3 className="text-xl font-bold">Total: ₹{totalPrice}</h3>
//               <button
//                 className="bg-yellow-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-yellow-600 transition"
//                 onClick={handleCheckout}
//               >
//                 Proceed to Checkout 🛍️
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </Elements>
//   );
// };

// export default Cart;

import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cartItems }),
      });

      const session = await response.json();
      window.location.href = session.url; // Redirect to Stripe Checkout
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🛒 Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty. Start shopping now!</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="flex items-center justify-between bg-gray-100 p-4 mb-3 rounded-md shadow-sm">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
                  <p className="text-gray-500">Price: <span className="text-green-600 font-bold">₹{item.price}</span></p>
                </div>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Remove ❌</button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <h3 className="text-xl font-bold">Total: ₹{cartItems.reduce((total, item) => total + item.price, 0)}</h3>
            <button
              className="bg-yellow-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-yellow-600 transition"
              onClick={handleCheckout}
            >
              Proceed to Checkout 🛍️
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
