const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
    name: String,
    specialization: String,
    experience: Number,
    contact: String,
    available: { type: Boolean, default: true }, // ✅ Shows if doctor is available
});

module.exports = mongoose.model("Doctor", DoctorSchema);
