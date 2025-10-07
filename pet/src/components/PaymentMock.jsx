// PaymentMock.jsx
import React, { useState } from "react";
import './PaymentMock.css';

const PaymentMock = ({ totalAmount }) => {
  const [step, setStep] = useState("form"); // 'form', 'processing', 'success'
  const [name, setName] = useState("");
  const [card, setCard] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    if (!name || !card) {
      alert("Enter all fields");
      return;
    }
    setStep("processing");
    setTimeout(() => setStep("success"), 2000);
  };

  if (step === "processing")
    return <h3>💫 Processing your payment…</h3>;

  if (step === "success")
    return <h3>✅ Payment Successful! Thank you, {name} 🎉</h3>;

  return (
    <form onSubmit={handlePayment}>
      <h3>Enter Mock Payment Info</h3>
      <input
        type="text"
        placeholder="Name on Card"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Card Number (e.g. 4111 1111 1111 1111)"
        value={card}
        onChange={(e) => setCard(e.target.value)}
        required
      />
      <button type="submit">Pay ₹{totalAmount.toFixed(2)}</button>
    </form>
  );
};

export default PaymentMock;
