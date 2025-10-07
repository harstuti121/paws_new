// const mongoose = require("mongoose");

// const messageSchema = new mongoose.Schema(
//   {
//     roomId: {
//       type: String,
//       required: true, // Doctor + PetOwner unique room
//     },
//     senderId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User", // can be Doctor or PetOwner
//       required: true,
//     },
//     receiverId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     message: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     status: {
//       type: String,
//       enum: ["sent", "delivered", "read"],
//       default: "sent",
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Message", messageSchema);


const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    senderId: { type: String, required: true },
    receiverId: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
