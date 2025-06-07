const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    petDetails: { 
        name: { type: String, required: true },  // 🐾 Pet Name
        species: { type: String, required: true },  // 🐕 Pet Category (Dog, Cat, etc.)
        breed: { type: String, required: true },  // 🐶 Breed
        age: { type: Number, required: true },  // 📅 Age in years
    },
    ownerContact: { type: String, required: true },  // 📞 Phone number
    dateSlot: { type: String, required: true },  // 📆 Appointment date
    timeSlot: { type: String, required: true },  // ⏰ Appointment time
    status: { type: String, enum: ["Pending", "Accepted", "Rejected"], default: "Pending" }
});

module.exports = mongoose.model("Appointment", appointmentSchema);
