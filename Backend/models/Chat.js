// const mongoose = require("mongoose");

// const chatSchema = new mongoose.Schema({
//   senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   message: { type: String, required: true },
//   timestamp: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("Chat", chatSchema);

// const mongoose = require("mongoose");

// const chatSchema = new mongoose.Schema(
//   {
//     senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     message: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Chat", chatSchema);

// const mongoose = require("mongoose");

// const ChatSchema = new mongoose.Schema(
//   {
//     petOwnerId: { type: mongoose.Schema.Types.ObjectId, ref: "PetOwner", required: true },
//     doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
//     message: { type: String, required: true },
//     sender: { type: String, required: true } // could be "petOwnerId" or "doctorId"
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Chat", ChatSchema);
// const mongoose = require("mongoose");

// const ChatSchema = new mongoose.Schema(
//   {
//     petOwnerId: { type: String, required: true },
//     doctorId: { type: String, required: true },
//     message: { type: String, required: true },
//     sender: { type: String, required: true }, // who sent it
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Chat", ChatSchema);


const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    petOwnerId: { type: String, required: true },
    doctorId: { type: String, required: true },
    message: { type: String, required: true },
    sender: { type: String, enum: ["petOwner", "doctor"], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", chatSchema);
