const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

const razorpay = new Razorpay({
    key_id: "YOUR_RAZORPAY_KEY_ID", // Replace with your Key ID
    key_secret: "YOUR_RAZORPAY_SECRET", // Replace with your Key Secret
  });

  router.post("/", (req, res) => {
    res.json({ message: "Payment route working!" });
  });

  router.post("/create-order", async (req, res) => {
    try {
      const { amount, currency } = req.body;
  
      const options = {
        amount: amount * 100, // Amount in paise
        currency,
        receipt: `receipt_${Date.now()}`,
        payment_capture: 1, // Auto capture payment
      };
  
      const order = await razorpay.orders.create(options);
      res.json({ success: true, order });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });
  
  // Verify payment signature
  router.post("/verify-payment", (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  
    const generated_signature = crypto
      .createHmac("sha256", "YOUR_RAZORPAY_SECRET")
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");
  
    if (generated_signature === razorpay_signature) {
      res.json({ success: true, message: "Payment verified successfully" });
    } else {
      res.status(400).json({ success: false, message: "Payment verification failed" });
    }
  });
  
module.exports = router;
