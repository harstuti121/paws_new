// // Backend/models/PetHealth.js
// const mongoose = require("mongoose");

// const vaccinationSchema = new mongoose.Schema({
//   name: { type: String, required: true, trim: true },
//   dateAdministered: { type: Date, required: true },
//   nextDueDate: { type: Date }, // optional
//   notes: { type: String, trim: true }
// });

// const petHealthSchema = new mongoose.Schema(
//   {
//     petId: { type: mongoose.Schema.Types.ObjectId, ref: "Pet", required: true },
//     ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     vaccinations: [vaccinationSchema],
//     weightHistory: [
//       {
//         date: { type: Date, default: Date.now },
//         weight: Number
//       }
//     ],
//     notes: { type: String, trim: true }
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("PetHealth", petHealthSchema);


const mongoose = require("mongoose");

const vaccinationSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  dateAdministered: { type: Date, required: true },
  nextDueDate: { type: Date }, // optional
  notes: { type: String, trim: true }
});

const medicalRecordSchema = new mongoose.Schema({
  visitDate: { type: Date, default: Date.now },
  diagnosis: { type: String, required: true },
  treatment: { type: String },
  prescribedMeds: [{ type: String }], // e.g. ["Antibiotic", "Deworming"]
  doctorNotes: { type: String }
});

const weightHistorySchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  weight: { type: Number, required: true }
});

const allergySchema = new mongoose.Schema({
  allergen: { type: String, required: true },
  reaction: { type: String },
  severity: { type: String, enum: ["Mild", "Moderate", "Severe"], default: "Mild" }
});

const petHealthSchema = new mongoose.Schema(
  {
    petId: { type: mongoose.Schema.Types.ObjectId, ref: "Pet", required: true },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    vaccinations: [vaccinationSchema],
    weightHistory: [weightHistorySchema],
    medicalRecords: [medicalRecordSchema],
    allergies: [allergySchema],
    notes: { type: String, trim: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("PetHealth", petHealthSchema);
