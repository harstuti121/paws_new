// const Message = require('./models/Message');

// io.on('connection', (socket) => {
//   console.log("✅ New socket connected");

//   socket.on('sendMessage', async ({ senderId, receiverId, message }) => {
//     if (!senderId || !receiverId || !message) {
//       console.log("⚠️ Missing senderId, receiverId, or message");
//       return;
//     }

//     // Save the message in the database
//     try {
//       const savedMessage = await Message.create({ senderId, receiverId, message });
//       io.to(receiverId).emit('receiveMessage', savedMessage);
//     } catch (error) {
//       console.error("Error saving message:", error);
//     }
//   });
// });

// socket.js
// const users = {}; // { userId: socketId }

// module.exports = function (io) {
//   io.on("connection", (socket) => {
//     console.log("✅ New socket connected:", socket.id);

//     // Step 1: Register the user ID when they connect
//     socket.on("register", (userId) => {
//       users[userId] = socket.id;
//       console.log(`📌 Registered user ${userId} with socket ${socket.id}`);
//     });

//     // Step 2: Handle message sending
//     socket.on("sendMessage", async ({ senderId, receiverId, message }) => {
//       if (!senderId || !receiverId || !message) {
//         console.log("⚠️ Missing senderId, receiverId, or message");
//         return;
//       }

//       try {
//         // Save message in DB
//         const savedMessage = await Message.create({
//           senderId,
//           receiverId,
//           message,
//           timestamp: new Date(),
//         });

//         // Step 3: Send message in real-time to the receiver
//         const receiverSocketId = users[receiverId];
//         if (receiverSocketId) {
//           io.to(receiverSocketId).emit("receiveMessage", savedMessage);
//         }
//       } catch (error) {
//         console.error("❌ Error saving message:", error);
//       }
//     });

//     // Step 4: Clean up on disconnect
//     socket.on("disconnect", () => {
//       console.log("❌ Disconnected:", socket.id);
//       for (const userId in users) {
//         if (users[userId] === socket.id) {
//           delete users[userId];
//           break;
//         }
//       }
//     });
//   });
// };

const Message = require("./models/Message");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("✅ New socket connected:", socket.id);

    // User joins their own room
    socket.on("joinRoom", (userId) => {
      socket.join(userId);
      console.log(`📌 User ${userId} joined their room`);
    });

    // Handle sending a message
    socket.on("sendMessage", async ({ senderId, receiverId, message }) => {
      if (!senderId || !receiverId || !message) return;

      try {
        const savedMessage = await Message.create({ senderId, receiverId, message });

        // Emit to the receiver's room
        io.to(receiverId).emit("receiveMessage", savedMessage);

        // Optionally, also send it back to the sender's own chat
        io.to(senderId).emit("receiveMessage", savedMessage);
      } catch (error) {
        console.error("❌ Error saving message:", error);
      }
    });
  });
};

