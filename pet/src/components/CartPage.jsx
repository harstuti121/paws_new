import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
import PaymentForm from "./PaymentForm";
import "./CartPage.css";
import RazorpayButton from "./RazorpayButton";

const CartPage = () => {
  const { cartItems: initialCartItems } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState({ name: "", email: "", contact: "" });
  // Fetch user details from backend
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching user data:", err));
  }, []);

  useEffect(() => {
    const itemMap = new Map();
    initialCartItems.forEach((item) => {
      const parsedPrice = parseFloat(String(item.price).replace(/[^0-9.]/g, "")) || 0;
      const titleKey = item.title.trim();
      if (itemMap.has(titleKey)) {
        const existingItem = itemMap.get(titleKey);
        existingItem.quantity += 1;
        existingItem.totalPrice += parsedPrice;
      } else {
        itemMap.set(titleKey, {
          ...item,
          price: parsedPrice,
          quantity: 1,
          totalPrice: parsedPrice,
        });
      }
    });
    setCartItems(Array.from(itemMap.values()));
  }, [initialCartItems]);

  const handlePayment = async () => {
    const stripe = await stripePromise;
    const response = await fetch("http://localhost:5000/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartItems, user }),
    });

    const session = await response.json();
    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      alert(result.error.message);
    }
  };
  const overallTotal = cartItems.length > 0 
  ? cartItems.reduce((acc, item) => acc + item.totalPrice, 0) 
  : 0;
  <RazorpayButton amount={overallTotal} />
  return (
    <div className="Cartpage">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.title} width="80" />
                <h3>{item.title}</h3>
                <p>Price: ₹{item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ₹{item.totalPrice.toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <h3>Total Amount: ₹{overallTotal.toFixed(2)}</h3>
          <Elements stripe={stripePromise}>
            <PaymentForm totalAmount={overallTotal} />
          </Elements>
          <button onClick={handlePayment} className="pay-now-btn">Pay Now</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
