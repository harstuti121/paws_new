import React, { useState } from "react";
const PaymentForm = ({ totalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error("Payment Error:", error);
      alert(error.message);
      setIsProcessing(false);
      return;
    }

    // Send payment info to backend
    const response = await fetch("http://localhost:5000/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalAmount * 100, id: paymentMethod.id }), // Convert amount to cents
    });

    const data = await response.json();
    if (data.success) {
      alert("Payment successful!");
    } else {
      alert("Payment failed.");
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={isProcessing || !stripe}>
        {isProcessing ? "Processing..." : `Pay ₹${totalAmount.toFixed(2)}`}
      </button>
    </form>
  );
};

export default PaymentForm;
