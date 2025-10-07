const mongoose = require("mongoose");

const chatMessageSchema = new mongoose.Schema(
  {
    roomId: { type: String, required: true },   // unique room (doc-owner)
    senderId: { type: String, required: true }, // who sent the message
    receiverId: { type: String, required: true }, // who receives
    message: { type: String, required: true },
  },
  { timestamps: true } // createdAt, updatedAt
);

module.exports = mongoose.model("ChatMessage", chatMessageSchema);
