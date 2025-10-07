// // Backend/models/SOSReport.js
// const mongoose = require("mongoose");

// const sosReportSchema = new mongoose.Schema(
//   {
//     petName:     { type: String, required: true, trim: true },
//     petType:     { type: String, required: true, trim: true }, // e.g. Dog/Cat/Other
//     location:    { type: String, required: true, trim: true },
//     description: { type: String, required: true, trim: true },
//     contact:     { type: String, required: true, trim: true }, // phone/email (stored, not publicly shown)
//     imageUrl:    { type: String, default: "" },
//     status:      { type: String, enum: ["open", "resolved"], default: "open" },

//     createdBy:   { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // optional
//     resolvedAt:  { type: Date },
//     resolvedBy:  { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("SOSReport", sosReportSchema);

// Backend/models/SOSReport.js
// const mongoose = require("mongoose");

// const sosReportSchema = new mongoose.Schema(
//   {
//     petName:     { type: String, required: true, trim: true },
//     petType:     { type: String, required: true, trim: true }, // e.g. Dog/Cat/Other
//     location:    { type: String, required: true, trim: true },
//     description: { type: String, required: true, trim: true },
//     contact:     { type: String, required: true, trim: true }, // phone/email
//     imageUrl:    { type: String, default: "" },

//     status:      { type: String, enum: ["open", "responding", "resolved"], default: "open" },
//     createdBy:   { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//     respondedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//     resolvedAt:  { type: Date },
//     resolvedBy:  { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("SOSReport", sosReportSchema);

const mongoose = require("mongoose");

const sosReportSchema = new mongoose.Schema(
  {
    petName:     { type: String, required: true, trim: true },
    petType:     { type: String, required: true, trim: true },
    location:    { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    contact:     { type: String, required: true, trim: true },
    imageUrl:    { type: String, default: "" },
    status:      { type: String, enum: ["open", "responding", "resolved"], default: "open" },
    createdBy:   { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    respondedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    resolvedAt:  { type: Date },
    resolvedBy:  { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SOSReport", sosReportSchema);
