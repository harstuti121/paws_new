// import React, { useEffect, useState } from "react";
// import { io } from "socket.io-client";
// import axios from "axios";

// // Connect to backend socket server
// const socket = io("http://localhost:5000", {
//   transports: ["websocket"], // more stable connection
// });

// const Chat = ({ userId, receiverId }) => {
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);

//   useEffect(() => {
//     if (!userId) return;

//     // Join a unique room for this user
//     socket.emit("joinRoom", userId);

//     // Listen for incoming messages
//     socket.on("receiveMessage", (data) => {
//       setChat((prev) => [...prev, data]);
//     });

//     return () => {
//       socket.off("receiveMessage");
//     };
//   }, [userId]);

//   // Fetch past messages from backend
//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/messages/${userId}/${receiverId}`
//         );
//         setChat(res.data);
//       } catch (err) {
//         console.error("Error fetching messages:", err);
//       }
//     };

//     if (userId && receiverId) {
//       fetchMessages();
//     }
//   }, [userId, receiverId]);

//   const handleSend = async () => {
//     if (!message.trim()) return;

//     const data = {
//       senderId: userId,
//       receiverId,
//       message,
//     };

//     // Send to backend via socket
//     socket.emit("sendMessage", data);

//     // Save to DB
//     try {
//       await axios.post("http://localhost:5000/api/messages", data);
//     } catch (error) {
//       console.error("Error saving message:", error);
//     }

//     setMessage("");
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Live Chat</h2>
//       <div
//         style={{
//           maxHeight: 300,
//           overflowY: "auto",
//           border: "1px solid #ccc",
//           padding: 10,
//         }}
//       >
//         {chat.map((msg, idx) => (
//           <div
//             key={idx}
//             style={{
//               margin: "5px 0",
//               color: msg.senderId === userId ? "green" : "blue",
//             }}
//           >
//             <b>{msg.senderId === userId ? "You" : "Doctor"}:</b> {msg.message}
//           </div>
//         ))}
//       </div>
//       <input
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Type a message..."
//         style={{ width: "80%", marginRight: "10px" }}
//       />
//       <button onClick={handleSend}>Send</button>
//     </div>
//   );
// };

// export default Chat;
// import React, { useEffect, useState } from "react";
// import { db } from "../firebase"; // adjust path if needed
// import {
//   collection,
//   addDoc,
//   query,
//   orderBy,
//   onSnapshot,
//   serverTimestamp,
// } from "firebase/firestore";

// const Chat = ({ userId, receiverId }) => {
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);

//   // Unique room id for pet owner & doctor
//   const roomId =
//     userId < receiverId ? `${userId}_${receiverId}` : `${receiverId}_${userId}`;

//   useEffect(() => {
//     const q = query(
//       collection(db, "chatrooms", roomId, "messages"),
//       orderBy("timestamp", "asc")
//     );

//     // Listen to real-time updates
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       const msgs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//       setChat(msgs);
//     });

//     return () => unsubscribe();
//   }, [roomId]);

//   const handleSend = async () => {
//     if (!message.trim()) return;

//     await addDoc(collection(db, "chatrooms", roomId, "messages"), {
//       senderId: userId,
//       receiverId,
//       text: message,
//       timestamp: serverTimestamp(),
//     });

//     setMessage("");
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Live Chat</h2>
//       <div
//         style={{
//           maxHeight: 300,
//           overflowY: "auto",
//           border: "1px solid #ccc",
//           padding: 10,
//         }}
//       >
//         {chat.map((msg) => (
//           <div
//             key={msg.id}
//             style={{
//               margin: "5px 0",
//               color: msg.senderId === userId ? "green" : "blue",
//             }}
//           >
//             <b>{msg.senderId === userId ? "You" : "Doctor"}:</b> {msg.text}
//           </div>
//         ))}
//       </div>
//       <input
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Type a message..."
//         style={{ width: "80%", marginRight: "10px" }}
//       />
//       <button onClick={handleSend}>Send</button>
//     </div>
//   );
// };

// export default Chat;

// Chat.jsx
// import React, { useEffect, useState } from "react";
// import { db } from "../firebaseConfig";
// import {
//   collection,
//   addDoc,
//   serverTimestamp,
//   query,
//   orderBy,
//   onSnapshot,
// } from "firebase/firestore";

// export default function Chat({ chatId, user }) {
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");

//   // listen to messages in real time
//   useEffect(() => {
//     const q = query(
//       collection(db, "chats", chatId, "messages"),
//       orderBy("createdAt", "asc")
//     );

//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       const msgs = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setMessages(msgs);
//     });

//     return () => unsubscribe();
//   }, [chatId]);

//   // send message
//   const sendMessage = async () => {
//     if (!text.trim()) return;

//     await addDoc(collection(db, "chats", chatId, "messages"), {
//       senderId: user._id,
//       text,
//       createdAt: serverTimestamp(),
//     });

//     setText("");
//   };

//   return (
//     <div>
//       <h2>Chat</h2>
//       <div style={{ height: 300, overflowY: "scroll", border: "1px solid gray" }}>
//         {messages.map((msg) => (
//           <p key={msg.id}>
//             <b>{msg.senderId === user._id ? "You" : "Doctor"}:</b> {msg.text}
//           </p>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type a message..."
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000", {
  withCredentials: true,
  transports: ["websocket"], 
});

export default function Chat() {
  const { doctorId } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");

  useEffect(() => {
    socket.emit("joinRoom", { userId: user._id, doctorId });

    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [doctorId, user._id]);

  const sendMessage = () => {
    const msg = {
      sender: user._id,
      text: newMsg,
      doctorId,
    };
    socket.emit("sendMessage", msg);
    setMessages((prev) => [...prev, msg]);
    setNewMsg("");
  };

  return (
    <div>
      <h2>Chat with Doctor</h2>
      <div className="chat-box">
        {messages.map((m, idx) => (
          <p key={idx}>
            <b>{m.sender === user._id ? "You" : "Doctor"}:</b> {m.text}
          </p>
        ))}
      </div>
      <input
        value={newMsg}
        onChange={(e) => setNewMsg(e.target.value)}
        placeholder="Type message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
