import React from "react";

const RazorpayButton = ({ amount }) => {
  const handlePayment = async () => {
    const response = await fetch("http://localhost:5000/api/payment/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, currency: "INR" }),
    });

    const data = await response.json();

    if (!data.success) {
      alert("Error creating order. Try again.");
      return;
    }

    const { order } = data;

    const options = {
        key: "YOUR_RAZORPAY_KEY",
        amount: overallTotal * 100, // Convert to paisa
        currency: "INR",
        name: "PawsAndParadise",
        description: "Order Payment",
        image: "/logo.png",
        prefill: {
          name: user.name,   // Fetching from backend
          email: user.email, 
          contact: user.contact,
        },
        theme: { color: "#3399cc" },
        handler: function (response) {
          alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        },
      };
      
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return <button onClick={handlePayment}>Pay with Razorpay</button>;
};

export default RazorpayButton;
