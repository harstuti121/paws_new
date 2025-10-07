// models/Salon.js
const mongoose = require("mongoose");

const SalonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Salon", SalonSchema);
