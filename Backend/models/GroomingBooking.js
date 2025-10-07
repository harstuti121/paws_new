const mongoose = require("mongoose");

const GroomingBookingSchema = new mongoose.Schema({
  petName: { type: String, required: true },
  petOwnerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  services: [
    {
      title: String,
      price: Number,
      quantity: { type: Number, default: 1 }
    }
  ],
  salon: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true }
  },
  serviceType: { type: String, default: "Salon" },
  date: { type: String, required: true },
  time: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  paymentInfo: { type: Object } // { method: "COD" or "card", details }
}, { timestamps: true });

module.exports = mongoose.models.GroomingBooking || mongoose.model("GroomingBooking", GroomingBookingSchema);
