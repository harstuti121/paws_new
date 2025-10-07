// import React, { useEffect, useState, useRef } from "react";
// import { useParams } from "react-router-dom";
// import { db } from "../firebaseConfig";
// import {
//   collection,
//   addDoc,
//   query,
//   orderBy,
//   onSnapshot,
//   serverTimestamp
// } from "firebase/firestore";
// import "./Chatt.css";

// export default function Chatt() {
//   const { chatId } = useParams();
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const bottomRef = useRef();
//   const user = JSON.parse(localStorage.getItem("user"));

//   // Real-time listener
//   useEffect(() => {
//     const messagesRef = collection(db, "chats", chatId, "messages");
//     const q = query(messagesRef, orderBy("timestamp", "asc"));

//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setMessages(msgs);
//       bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//     });

//     return () => unsubscribe();
//   }, [chatId]);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     try {
//       await addDoc(collection(db, "chats", chatId, "messages"), {
//         senderId: user._id,
//         text: input.trim(),
//         timestamp: serverTimestamp()
//       });
//       setInput(""); // Clear input after sending
//     } catch (err) {
//       console.error("Send message error:", err);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") sendMessage();
//   };

//   return (
//     <div className="chat-wrapper">
//       <div className="chat-header">
//         <h2>Chat with Doctor / Pet Owner</h2>
//       </div>

//       <div className="chat-body">
//         {messages.map(msg => (
//           <div
//             key={msg.id}
//             className={`chat-msg ${msg.senderId === user._id ? "sent" : "received"}`}
//           >
//             <p>{msg.text}</p>
//           </div>
//         ))}
//         <div ref={bottomRef}></div>
//       </div>

//       <div className="chat-footer">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={handleKeyPress}
//           placeholder="Type a message..."
//         />
//         <button onClick={sendMessage}>&#9658;</button>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:5000");

// export default function Chatt({ userId, otherUserId }) {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [typingUser, setTypingUser] = useState(null);

//   const roomId = [userId, otherUserId].sort().join("_");

//   useEffect(() => {
//     socket.emit("joinRoom", { roomId });

//     socket.on("messageHistory", (history) => setMessages(history));
//     socket.on("receiveMessage", (msg) => setMessages((prev) => [...prev, msg]));
//     socket.on("typing", (user) => setTypingUser(user));
//     socket.on("messagesRead", () => {
//       setMessages((prev) => prev.map(m => ({ ...m, status: "read" })));
//     });

//     return () => socket.disconnect();
//   }, [roomId]);

//   const sendMessage = () => {
//     if (input.trim()) {
//       socket.emit("sendMessage", { roomId, sender: userId, text: input });
//       setInput("");
//     }
//   };

//   const handleTyping = () => {
//     socket.emit("typing", { roomId, sender: userId });
//   };

//   return (
//     <div className="chat-box">
//       <div className="messages">
//         {messages.map((m, i) => (
//           <p key={i} className={m.sender === userId ? "me" : "them"}>
//             <b>{m.sender === userId ? "Me" : "Other"}:</b> {m.text}
//             <span className="status">({m.status})</span>
//           </p>
//         ))}
//         {typingUser && <p className="typing">{typingUser} is typing...</p>}
//       </div>

//       <div className="input-area">
//         <input 
//           value={input} 
//           onChange={(e) => setInput(e.target.value)} 
//           onKeyPress={handleTyping}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect, useRef } from "react";
// import io from "socket.io-client";
// import "./Chatt.css";

// const socket = io("http://localhost:5000"); // change to your backend URL

// export default function Chatt({ userId, chatId, role }) {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     if (!chatId) return;

//     socket.emit("joinChat", chatId);

//     socket.on("receiveMessage", (message) => {
//       setMessages((prev) => [...prev, message]);
//     });

//     return () => {
//       socket.off("receiveMessage");
//     };
//   }, [chatId]);

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const sendMessage = () => {
//     if (!newMessage.trim()) return;
//     const messageData = {
//       chatId,
//       senderId: userId,
//       senderRole: role, // "doctor" or "petOwner"
//       content: newMessage,
//     };
//     socket.emit("sendMessage", messageData);
//     setMessages((prev) => [...prev, messageData]);
//     setNewMessage("");
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") sendMessage();
//   };

//   return (
//     <div className="chatt-container">
//       <div className="chatt-header">
//         <h3>Chat Room</h3>
//       </div>

//       <div className="chatt-messages">
//         {messages.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`chatt-message ${
//               msg.senderId === userId ? "my-message" : "other-message"
//             }`}
//           >
//             <div className="message-bubble">{msg.content}</div>
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>

//       <div className="chatt-input">
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           onKeyDown={handleKeyPress}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import io from "socket.io-client";
// import axios from "axios";
// import "./Chatt.css"; // styling file

// // ✅ Connect socket
// const socket = io("http://localhost:5000"); // change if backend hosted elsewhere

// export default function Chatt({ roomId, userId, receiverId }) {
//   const [messages, setMessages] = useState([]);
//   const [newMsg, setNewMsg] = useState("");

//   // ✅ Fetch old messages when chat loads
//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/messages/${roomId}`);
//         setMessages(res.data);
//       } catch (err) {
//         console.error("Error fetching messages", err);
//       }
//     };
//     fetchMessages();

//     // ✅ Join room
//     socket.emit("joinRoom", roomId);

//     // ✅ Listen for new messages
//     socket.on("receiveMessage", (msg) => {
//       if (msg.roomId === roomId) {
//         setMessages((prev) => [...prev, msg]);
//       }
//     });

//     return () => {
//       socket.off("receiveMessage");
//     };
//   }, [roomId]);

//   // ✅ Send message
//   const sendMessage = async () => {
//     if (!newMsg.trim()) return;

//     const msgData = {
//       roomId,
//       senderId: userId,
//       receiverId,
//       message: newMsg,
//     };

//     try {
//       // save in DB
//       const res = await axios.post("http://localhost:5000/api/messages", msgData);

//       // emit to socket
//       socket.emit("sendMessage", res.data);

//       // update locally
//       setMessages((prev) => [...prev, res.data]);
//       setNewMsg("");
//     } catch (err) {
//       console.error("Message send failed", err);
//     }
//   };

//   return (
//     <div className="chat-container">
//       {/* ✅ Chat header */}
//       <div className="chat-header">
//         <h2>Chat</h2>
//       </div>

//       {/* ✅ Messages area */}
//       <div className="chat-messages">
//         {messages.map((msg) => (
//           <div
//             key={msg._id}
//             className={`chat-message ${
//               msg.senderId === userId ? "sent" : "received"
//             }`}
//           >
//             <p>{msg.message}</p>
//             <span className="chat-time">
//               {new Date(msg.createdAt).toLocaleTimeString([], {
//                 hour: "2-digit",
//                 minute: "2-digit",
//               })}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* ✅ Input box */}
//       <div className="chat-input">
//         <input
//           type="text"
//           value={newMsg}
//           placeholder="Type a message..."
//           onChange={(e) => setNewMsg(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect, useRef } from "react";
// import { useParams } from "react-router-dom"; // ✅ Get roomId from URL
// import io from "socket.io-client";
// import axios from "axios";
// import "./Chatt.css"; // for styling

// const socket = io("http://localhost:5000"); // backend

// export default function Chatt() {
//   const { roomId } = useParams(); // ✅ dynamic chat room
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const messagesEndRef = useRef(null);

//   // scroll to bottom always
//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // ✅ Fetch old messages
//   useEffect(() => {
//     if (!roomId) return;
//     const fetchMessages = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/messages/${roomId}`
//         );
//         setMessages(res.data);
//       } catch (err) {
//         console.error("Error fetching messages:", err);
//       }
//     };
//     fetchMessages();
//   }, [roomId]);

//   // ✅ Socket.io join + listen
//   useEffect(() => {
//     if (!roomId) return;
//     socket.emit("joinRoom", roomId);

//     socket.on("receiveMessage", (msg) => {
//       setMessages((prev) => [...prev, msg]);
//     });

//     return () => {
//       socket.off("receiveMessage");
//     };
//   }, [roomId]);

//   useEffect(scrollToBottom, [messages]);

//   // ✅ Send message
//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (!newMessage.trim()) return;

//     const messageData = {
//       roomId,
//       senderId: localStorage.getItem("userId") || "User",
//       receiverId: "Doctor", // placeholder (update when doctor-petowner logic ready)
//       message: newMessage,
//     };

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/messages",
//         messageData
//       );
//       socket.emit("sendMessage", res.data); // broadcast
//       setMessages((prev) => [...prev, res.data]); // update instantly
//       setNewMessage("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   return (
//     <div className="chat-container">
//       {/* Header */}
//       <div className="chat-header">💬 Chat Room: {roomId}</div>

//       {/* Messages */}
//       <div className="chat-messages">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`chat-message ${
//               msg.senderId === (localStorage.getItem("userId") || "User")
//                 ? "sent"
//                 : "received"
//             }`}
//           >
//             <span className="sender">{msg.senderId}:</span>
//             <p>{msg.message}</p>
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>

//       {/* Input */}
//       <form className="chat-input" onSubmit={sendMessage}>
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }


// import React, { useEffect, useState, useRef } from "react";
// import io from "socket.io-client";
// import axios from "axios";
// import "./Chatt.css";

// const socket = io("http://localhost:5000"); // ✅ Your backend URL

// export default function Chatt({ roomId, currentUserId, otherUserId }) {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const messagesEndRef = useRef(null);

//   // ✅ Fetch old messages from DB
//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/messages/${roomId}`);
//         setMessages(res.data);
//       } catch (error) {
//         console.error("Error fetching messages:", error);
//       }
//     };
//     fetchMessages();
//   }, [roomId]);

//   // ✅ Join room when component mounts
//   useEffect(() => {
//     socket.emit("joinRoom", roomId);

//     // ✅ Listen for new messages
//     socket.on("receiveMessage", (message) => {
//       setMessages((prev) => [...prev, message]);
//     });

//     return () => {
//       socket.off("receiveMessage");
//     };
//   }, [roomId]);

//   // ✅ Send message
//   const sendMessage = async (e) => {
//     e.preventDefault();
//     if (!newMessage.trim()) return;

//     const msg = {
//       roomId,
//       senderId: currentUserId,
//       receiverId: otherUserId,
//       message: newMessage,
//     };

//     try {
//       const res = await axios.post("http://localhost:5000/api/messages", msg);
//       socket.emit("sendMessage", res.data); // send saved msg
//       setMessages((prev) => [...prev, res.data]);
//       setNewMessage("");
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }
//   };

//   // ✅ Auto scroll down
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <div className="chat-container">
//       {/* Header */}
//       <div className="chat-header">
//         <h2>Chat</h2>
//       </div>

//       {/* Messages */}
//       <div className="chat-messages">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`chat-message ${
//               msg.senderId === currentUserId ? "own" : "other"
//             }`}
//           >
//             <p>{msg.message}</p>
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>

//       {/* Input */}
//       <form className="chat-input" onSubmit={sendMessage}>
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }

// Chat.jsx
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import io from "socket.io-client";
// import "./Chat.css";

// const socket = io("http://localhost:5000", { transports: ["websocket"] });

// export default function Chat() {
//   const { otherUserId } = useParams(); // from route: /chat/:otherUserId
//   const currentUser = JSON.parse(localStorage.getItem("user")); // doctor or pet owner
//   const currentUserId = currentUser?._id;

//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   // Create unique roomId (sorted so both doctor & owner join same room)
//   const roomId = [currentUserId, otherUserId].sort().join("_");

//   useEffect(() => {
//     if (!currentUserId || !otherUserId) return;

//     // Join the chat room
//     socket.emit("joinRoom", roomId);

//     // Receive messages
//     socket.on("receiveMessage", (msg) => {
//       setMessages((prev) => [...prev, msg]);
//     });

//     return () => {
//       socket.off("receiveMessage");
//     };
//   }, [roomId, currentUserId, otherUserId]);

//   const sendMessage = () => {
//     if (!input.trim()) return;

//     const msgData = {
//       roomId,
//       senderId: currentUserId,
//       receiverId: otherUserId,
//       text: input,
//       timestamp: new Date(),
//     };

//     socket.emit("sendMessage", msgData);
//     setMessages((prev) => [...prev, msgData]);
//     setInput("");
//   };

//   return (
//     <div className="chat-container">
//       <h2>Chat</h2>
//       <div className="chat-box">
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             className={`chat-message ${
//               msg.senderId === currentUserId ? "own" : "other"
//             }`}
//           >
//             <p>{msg.text}</p>
//             <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>
//           </div>
//         ))}
//       </div>

//       <div className="chat-input">
//         <input
//           type="text"
//           value={input}
//           placeholder="Type a message..."
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";
// import axios from "axios";
// import "./Chatt.css";

// const socket = io("http://localhost:5000");

// export default function Chatt({ roomId, currentUserId, otherUserId }) {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");

//   useEffect(() => {
//     // ✅ Join room
//     socket.emit("joinRoom", roomId);

//     // ✅ Fetch old messages
//     axios.get(`http://localhost:5000/api/chat/${roomId}`).then((res) => {
//       setMessages(res.data);
//     });

//     // ✅ Listen for new messages
//     socket.on("receiveMessage", (msg) => {
//       setMessages((prev) => [...prev, msg]);
//     });

//     return () => {
//       socket.off("receiveMessage");
//     };
//   }, [roomId]);

//   const sendMessage = () => {
//     if (newMessage.trim() === "") return;
//     const msg = { roomId, senderId: currentUserId, receiverId: otherUserId, message: newMessage };

//     socket.emit("sendMessage", msg);
//     setNewMessage("");
//   };

//   return (
//     <div className="chat-container">
//       <div className="chat-box">
//         {messages.map((msg, idx) => (
//           <div
//             key={idx}
//             className={msg.senderId === currentUserId ? "chat-msg self" : "chat-msg other"}
//           >
//             {msg.message}
//           </div>
//         ))}
//       </div>

//       <div className="chat-input">
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type a message..."
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect, useRef } from "react";
// import io from "socket.io-client";
// import axios from "axios";
// import "./Chat.css";

// const socket = io("http://localhost:5000"); // backend socket server

// export default function Chat({ roomId, currentUserId, otherUserId }) {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const messagesEndRef = useRef(null);

//   // 🔹 Fetch old messages from DB when component loads
//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/messages/${roomId}`);
//         setMessages(res.data);
//       } catch (err) {
//         console.error("Error fetching messages:", err);
//       }
//     };
//     fetchMessages();
//   }, [roomId]);

//   // 🔹 Listen for new socket messages
//   useEffect(() => {
//     socket.emit("joinRoom", roomId);

//     socket.on("receiveMessage", (message) => {
//       setMessages((prev) => [...prev, message]);
//     });

//     return () => {
//       socket.off("receiveMessage");
//     };
//   }, [roomId]);

//   // 🔹 Scroll to bottom when messages update
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // 🔹 Send message
//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const newMessage = {
//       roomId,
//       sender: currentUserId,
//       receiver: otherUserId,
//       text: input,
//       timestamp: new Date(),
//     };

//     try {
//       // Save to DB
//       await axios.post("http://localhost:5000/api/messages", newMessage);

//       // Emit to socket
//       socket.emit("sendMessage", newMessage);

//       setMessages((prev) => [...prev, newMessage]);
//       setInput("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   return (
//     <div className="chat-container">
//       <div className="chat-box">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`chat-message ${
//               msg.sender === currentUserId ? "sent" : "received"
//             }`}
//           >
//             <p>{msg.text}</p>
//             <span className="timestamp">
//               {new Date(msg.timestamp).toLocaleTimeString()}
//             </span>
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>

//       <div className="chat-input">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type a message..."
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import "./Chat.css";

// export default function Chat() {
//   const [messages, setMessages] = useState([
//     { text: "Hi, how can I help you?", sender: "received", time: "10:00 AM" },
//     { text: "I need help with my pet's diet.", sender: "sent", time: "10:02 AM" }
//   ]);
//   const [input, setInput] = useState("");

//   // handle sending message
//   const sendMessage = () => {
//     if (input.trim() === "") return;

//     const newMessage = {
//       text: input,
//       sender: "sent",
//       time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
//     };

//     setMessages([...messages, newMessage]);
//     setInput("");
//   };

//   return (
//     <div className="chat-container">
//       <div className="chat-box">
//         {messages.map((msg, index) => (
//           <div key={index} className={`chat-message ${msg.sender}`}>
//             {msg.text}
//             <span className="timestamp">{msg.time}</span>
//           </div>
//         ))}
//       </div>

//       <div className="chat-input">
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Chat.css";

// export default function Chat({ senderId, receiverId }) {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");

//   // ✅ Fetch messages
//   useEffect(() => {
//     if (senderId && receiverId) {
//       axios
//         .get(`http://localhost:5000/api/chats/${senderId}/${receiverId}`)
//         .then((res) => setMessages(res.data))
//         .catch((err) => console.error("Error fetching messages:", err));
//     }
//   }, [senderId, receiverId]);

//   // ✅ Send message
//   const sendMessage = async () => {
//     if (!newMessage.trim()) return;

//     try {
//       const res = await axios.post("http://localhost:5000/api/chats", {
//         senderId,
//         receiverId,
//         message: newMessage,
//       });

//       setMessages([...messages, res.data]);
//       setNewMessage("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   return (
//     <div className="chat-container">
//       <div className="chat-box">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`chat-message ${
//               msg.senderId === senderId ? "sent" : "received"
//             }`}
//           >
//             {msg.message}
//             <span className="timestamp">
//               {new Date(msg.timestamp).toLocaleTimeString()}
//             </span>
//           </div>
//         ))}
//       </div>

//       <div className="chat-input">
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type a message..."
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import io from "socket.io-client";
// import "./Chat.css";

// const socket = io("http://localhost:5000");

// export default function Chat({ senderId, receiverId }) {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const chatBoxRef = useRef();
//   const roomId = [senderId, receiverId].sort().join("_"); // unique room

//   useEffect(() => {
//     socket.emit("joinRoom", roomId);

//     // Fetch existing messages from DB
//     axios
//       .get(`http://localhost:5000/api/chats/${senderId}/${receiverId}`)
//       .then((res) => setMessages(res.data))
//       .catch((err) => console.error(err));

//     // Listen for incoming messages
//     socket.on("receiveMessage", (msg) => {
//       setMessages((prev) => [...prev, msg]);
//     });

//     return () => socket.off("receiveMessage");
//   }, [senderId, receiverId]);

//   const sendMessage = async () => {
//     if (!newMessage.trim()) return;

//     const messageData = { senderId, receiverId, message: newMessage, roomId };

//     try {
//       // Save message to DB
//       const res = await axios.post("http://localhost:5000/api/chats", {
//         senderId,
//         receiverId,
//         message: newMessage,
//       });

//       // Emit to Socket.IO
//       socket.emit("sendMessage", res.data);

//       setNewMessage("");
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   useEffect(() => {
//     // Scroll to bottom when new message arrives
//     if (chatBoxRef.current) {
//       chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
//     }
//   }, [messages]);

//   return (
//     <div className="chat-container">
//       <div className="chat-box" ref={chatBoxRef}>
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`chat-message ${
//               msg.senderId === senderId ? "sent" : "received"
//             }`}
//           >
//             {msg.message}
//             <span className="timestamp">
//               {new Date(msg.timestamp).toLocaleTimeString()}
//             </span>
//           </div>
//         ))}
//       </div>

//       <div className="chat-input">
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type a message..."
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState, useRef } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import "./Chat.css";

// export default function Chat() {
//   const location = useLocation();
//   const { roomId, currentUserId, otherUserId } = location.state;

//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const chatBoxRef = useRef(null);

//   // Fetch messages on mount
//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/chats/${roomId}`
//         );
//         setMessages(res.data);
//         scrollToBottom();
//       } catch (err) {
//         console.error("Error fetching messages:", err);
//       }
//     };

//     if (roomId) fetchMessages();
//   }, [roomId]);

//   const scrollToBottom = () => {
//     if (chatBoxRef.current) {
//       chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
//     }
//   };

//   const sendMessage = async () => {
//     if (!newMessage.trim()) return;

//     const messageData = {
//       roomId,
//       senderId: currentUserId,
//       receiverId: otherUserId,
//       text: newMessage,
//     };

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/chats",
//         messageData
//       );
//       setMessages((prev) => [...prev, res.data]);
//       setNewMessage("");
//       scrollToBottom();
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") sendMessage();
//   };

//   return (
//     <div className="chat-container">
//       <div className="chat-box" ref={chatBoxRef}>
//         {messages.map((msg) => (
//           <div
//             key={msg._id}
//             className={`chat-message ${
//               msg.senderId === currentUserId ? "sent" : "received"
//             }`}
//           >
//             {msg.text}
//             <span className="timestamp">
//               {new Date(msg.createdAt).toLocaleTimeString([], {
//                 hour: "2-digit",
//                 minute: "2-digit",
//               })}
//             </span>
//           </div>
//         ))}
//       </div>
//       <div className="chat-input">
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           onKeyPress={handleKeyPress}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import io from "socket.io-client";
// import axios from "axios";

// const socket = io("http://localhost:5000");

// export default function Chat({ senderId, receiverId }) {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   // ✅ Load old messages
//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000/api/chats/${senderId}/${receiverId}`)
//       .then((res) => setMessages(res.data))
//       .catch((err) => console.error(err));
//   }, [senderId, receiverId]);

//   // ✅ Listen for new incoming messages
//   useEffect(() => {
//     socket.on("receiveMessage", (msg) => {
//       if (
//         (msg.senderId === senderId && msg.receiverId === receiverId) ||
//         (msg.senderId === receiverId && msg.receiverId === senderId)
//       ) {
//         setMessages((prev) => [...prev, msg]);
//       }
//     });

//     return () => socket.off("receiveMessage");
//   }, [senderId, receiverId]);

//   // ✅ Send message
//   const sendMessage = () => {
//     if (input.trim()) {
//       const msg = { senderId, receiverId, message: input };
//       socket.emit("sendMessage", msg);
//       setInput("");
//     }
//   };

//   return (
//     <div className="chat-container">
//       <div className="chat-box">
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             className={msg.senderId === senderId ? "my-msg" : "other-msg"}
//           >
//             {msg.message}
//           </div>
//         ))}
//       </div>
//       <div className="chat-input">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type a message..."
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Chatt({ petOwnerId: propOwnerId, doctorId: propDoctorId }) {
//   const [messages, setMessages] = useState([]);

//   // ✅ Try props first, fallback to localStorage
//   const petOwnerId = propOwnerId || localStorage.getItem("petOwnerId");
//   const doctorId = propDoctorId || localStorage.getItem("doctorId");

//   useEffect(() => {
//     // ✅ Debugging logs
//     console.log("Pet Owner ID:", petOwnerId);
//     console.log("Doctor ID:", doctorId);

//     // ✅ If IDs are missing, don’t call API
//     if (!petOwnerId || !doctorId) {
//       console.error("❌ Missing IDs, cannot fetch chats");
//       return;
//     }

//     // ✅ Fetch chats only when IDs are valid
//     axios
//       .get(`http://localhost:5000/api/chats/${petOwnerId}/${doctorId}`)
//       .then((res) => {
//         setMessages(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching chats:", err);
//       });
//   }, [petOwnerId, doctorId]);

//   return (
//     <div>
//       <h2>Chat</h2>
//       {messages.length === 0 ? (
//         <p>No messages yet...</p>
//       ) : (
//         <ul>
//           {messages.map((msg, idx) => (
//             <li key={idx}>
//               <strong>{msg.sender}:</strong> {msg.text}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Chatt.css";

// export default function Chatt() {
//   const [messages, setMessages] = useState([]);

//   // ✅ Get IDs from localStorage
//   const petOwnerId = localStorage.getItem("petOwnerId");
//   const doctorId = localStorage.getItem("doctorId");

//   useEffect(() => {
//     console.log("Pet Owner ID:", petOwnerId);
//     console.log("Doctor ID:", doctorId);

//     if (!petOwnerId || !doctorId) {
//       console.error("❌ Missing IDs, cannot fetch chats");
//       return;
//     }

//     // ✅ Fetch chats only when IDs are available
//     axios
//       .get(`http://localhost:5000/api/chats/${petOwnerId}/${doctorId}`)
//       .then((res) => setMessages(res.data))
//       .catch((err) => console.error("Error fetching chats:", err));
//   }, [petOwnerId, doctorId]);

//   return (
//     <div>
//       <h2>Chat</h2>
//       {messages.length > 0 ? (
//         messages.map((msg, index) => <p key={index}>{msg.text}</p>)
//       ) : (
//         <p>No messages yet.</p>
//       )}
//     </div>
//   );
// }


// frontend/src/components/Chatt.jsx
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function Chatt() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");

//   // ✅ Get IDs from localStorage
//   const petOwnerId = localStorage.getItem("petOwnerId");
//   const doctorId = localStorage.getItem("doctorId");

//   useEffect(() => {
//     console.log("Pet Owner ID:", petOwnerId);
//     console.log("Doctor ID:", doctorId);

//     if (!petOwnerId || !doctorId) {
//       console.error("❌ Missing IDs, cannot fetch chats");
//       return;
//     }

//     fetchChats(petOwnerId, doctorId);
//   }, []);

//   // ✅ Fetch messages between owner & doctor
//   const fetchChats = async (ownerId, docId) => {
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/chats/${ownerId}/${docId}`
//       );
//       setMessages(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching chats:", err);
//     }
//   };

//   // ✅ Send new message
//   const sendMessage = async () => {
//     if (!newMessage.trim()) return;

//     if (!petOwnerId || !doctorId) {
//       console.error("❌ Missing IDs, cannot send message");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/api/chats", {
//         petOwnerId,
//         doctorId,
//         message: newMessage,
//         sender: petOwnerId ? "petOwner" : "doctor", // who is sending
//       });

//       setMessages((prev) => [...prev, res.data]);
//       setNewMessage("");
//     } catch (err) {
//       console.error("❌ Error sending message:", err);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
//       <h2>💬 Chat</h2>

//       {/* Messages */}
//       <div
//         style={{
//           border: "1px solid #ddd",
//           padding: "10px",
//           height: "300px",
//           overflowY: "auto",
//           marginBottom: "10px",
//         }}
//       >
//         {messages.length === 0 ? (
//           <p>No messages yet...</p>
//         ) : (
//           messages.map((msg, idx) => (
//             <div
//               key={idx}
//               style={{
//                 textAlign: msg.sender === "petOwner" ? "left" : "right",
//                 marginBottom: "8px",
//               }}
//             >
//               <strong>{msg.sender}:</strong> {msg.message}
//             </div>
//           ))
//         )}
//       </div>

//       {/* Input Box */}
//       <div style={{ display: "flex", gap: "10px" }}>
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           style={{ flex: 1, padding: "8px" }}
//         />
//         <button onClick={sendMessage} style={{ padding: "8px 12px" }}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// frontend/src/components/Chatt.jsx
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Chatt.css";

// export default function Chatt() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");

//   // ✅ Get IDs from localStorage
//   const petOwnerId = localStorage.getItem("petOwnerId");
//   const doctorId = localStorage.getItem("doctorId");

//   useEffect(() => {
//     console.log("Pet Owner ID:", petOwnerId);
//     console.log("Doctor ID:", doctorId);

//     if (!petOwnerId || !doctorId) {
//       console.error("❌ Missing IDs, cannot fetch chats");
//       return;
//     }

//     fetchChats(petOwnerId, doctorId);
//   }, []);

//   // ✅ Fetch messages between owner & doctor
//   const fetchChats = async (ownerId, docId) => {
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/chats/${ownerId}/${docId}`
//       );
//       setMessages(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching chats:", err);
//     }
//   };

//   // ✅ Send new message
//   const sendMessage = async () => {
//     if (!newMessage.trim()) return;

//     if (!petOwnerId || !doctorId) {
//       console.error("❌ Missing IDs, cannot send message");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/api/chats", {
//         petOwnerId,
//         doctorId,
//         message: newMessage,
//         sender: petOwnerId ? "petOwner" : "doctor", // who is sending
//       });

//       setMessages((prev) => [...prev, res.data]);
//       setNewMessage("");
//     } catch (err) {
//       console.error("❌ Error sending message:", err);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
//       <h2>💬 Chat</h2>

//       {/* Messages */}
//       <div
//         style={{
//           border: "1px solid #ddd",
//           padding: "10px",
//           height: "300px",
//           overflowY: "auto",
//           marginBottom: "10px",
//         }}
//       >
//         {messages.length === 0 ? (
//           <p>No messages yet...</p>
//         ) : (
//           messages.map((msg, idx) => (
//             <div
//               key={idx}
//               style={{
//                 textAlign: msg.sender === "petOwner" ? "left" : "right",
//                 marginBottom: "8px",
//               }}
//             >
//               <strong>{msg.sender}:</strong> {msg.message}
//             </div>
//           ))
//         )}
//       </div>

//       {/* Input Box */}
//       <div style={{ display: "flex", gap: "10px" }}>
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           style={{ flex: 1, padding: "8px" }}
//         />
//         <button onClick={sendMessage} style={{ padding: "8px 12px" }}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Chatt() {
//   const [chats, setChats] = useState([]);

//   const petOwnerId = localStorage.getItem("petOwnerId");
//   const doctorId = localStorage.getItem("doctorId");

//   console.log("Pet Owner ID:", petOwnerId);
//   console.log("Doctor ID:", doctorId);

//   useEffect(() => {
//     if (!petOwnerId || !doctorId) {
//       console.error("❌ Missing IDs, cannot fetch chats");
//       return;
//     }

//     axios
//       .get(`http://localhost:5000/api/chats/${petOwnerId}/${doctorId}`)
//       .then((res) => {
//         setChats(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching chats:", err);
//       });
//   }, [petOwnerId, doctorId]);

//   return (
//     <div>
//       <h2>Chats</h2>
//       {chats.map((chat, idx) => (
//         <p key={idx}>{chat.message}</p>
//       ))}
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Chatt.css";

// export default function Chatt() {
//   const [chats, setChats] = useState([]);
//   const [newMessage, setNewMessage] = useState("");

//   const petOwnerId = localStorage.getItem("petOwnerId");
//   const doctorId = localStorage.getItem("doctorId");

//   console.log("Pet Owner ID:", petOwnerId);
//   console.log("Doctor ID:", doctorId);

//   useEffect(() => {
//     if (!petOwnerId || !doctorId) {
//       console.error("❌ Missing IDs, cannot fetch chats");
//       return;
//     }

//     axios
//       .get(`http://localhost:5000/api/chats/${petOwnerId}/${doctorId}`)
//       .then((res) => {
//         setChats(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching chats:", err);
//       });
//   }, [petOwnerId, doctorId]);

//   // const sendMessage = async () => {
//   //   if (!newMessage.trim()) return;

//   //   const messageData = {
//   //     petOwnerId,
//   //     doctorId,
//   //     message: newMessage,
//   //     sender: petOwnerId, // 👈 mark sender (could also be "doctorId")
//   //   };

//   //   try {
//   //     await axios.post("http://localhost:5000/api/chats", messageData);
//   //     setChats([...chats, messageData]); // update UI instantly
//   //     setNewMessage(""); // clear input
//   //   } catch (err) {
//   //     console.error("Error sending message:", err);
//   //   }
//   // };

// const sendMessage = async () => {
//   if (!newMessage.trim()) return;

//   const messageData = {
//     petOwnerId,
//     doctorId,
//     message: newMessage,
//     sender: petOwnerId,
//   };

//   try {
//     const res = await axios.post("http://localhost:5000/api/chats", messageData);
//     console.log("✅ Message saved:", res.data);

//     setChats([...chats, res.data]); // use response from backend
//     setNewMessage("");
//   } catch (err) {
//     console.error("❌ Error sending message:", err.response?.data || err.message);
//   }
// };

//   return (
//     <div className="chat-container">
//       <h2 className="chat-header">Chat with Doctor</h2>

//       <div className="chat-box">
//         {chats.map((chat, idx) => (
//           <div
//             key={idx}
//             className={`chat-message ${
//               chat.sender === petOwnerId ? "sent" : "received"
//             }`}
//           >
//             {chat.message}
//           </div>
//         ))}
//       </div>

//       <div className="chat-input-container">
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type your message..."
//           className="chat-input"
//         />
//         <button onClick={sendMessage} className="send-btn">
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Chatt.css";

// export default function Chatt() {
//   const [chats, setChats] = useState([]);
//   const [newMessage, setNewMessage] = useState("");

//   // ✅ Try to read IDs from localStorage
//   let petOwnerId = localStorage.getItem("petOwnerId");
//   let doctorId = localStorage.getItem("doctorId");

//   // ✅ Fallback IDs if null (temporary hack)
//   if (!petOwnerId) {
//     petOwnerId = "owner123"; // put any fixed string for now
//     localStorage.setItem("petOwnerId", petOwnerId);
//   }
//   if (!doctorId) {
//     doctorId = "doctor123"; // put any fixed string for now
//     localStorage.setItem("doctorId", doctorId);
//   }

//   console.log("Pet Owner ID:", petOwnerId);
//   console.log("Doctor ID:", doctorId);

//   // ✅ Fetch old chats
//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000/api/chats/${petOwnerId}/${doctorId}`)
//       .then((res) => setChats(res.data))
//       .catch((err) => console.error("Error fetching chats:", err));
//   }, [petOwnerId, doctorId]);

//   // ✅ Send message
//   const sendMessage = async () => {
//     if (!newMessage.trim()) return;

//     const messageData = {
//       petOwnerId,
//       doctorId,
//       message: newMessage,
//       sender: petOwnerId, // assume pet owner is sending
//     };

//     try {
//       const res = await axios.post("http://localhost:5000/api/chats", messageData);
//       setChats([...chats, res.data]); // add saved message
//       setNewMessage("");
//     } catch (err) {
//       console.error("❌ Error sending message:", err.response?.data || err.message);
//     }
//   };

//   return (
//     <div className="chat-container">
//       <h2 className="chat-header">Chat with Doctor</h2>

//       <div className="chat-box">
//         {chats.map((chat, idx) => (
//           <div
//             key={idx}
//             className={`chat-message ${
//               chat.sender === petOwnerId ? "sent" : "received"
//             }`}
//           >
//             {chat.message}
//           </div>
//         ))}
//       </div>

//       <div className="chat-input-container">
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type your message..."
//           className="chat-input"
//         />
//         <button onClick={sendMessage} className="send-btn">
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";

// export default function Chatt() {
//   // Load IDs from localStorage or fallback dummy values
//   const storedPetOwnerId = localStorage.getItem("petOwnerId");
//   const storedDoctorId = localStorage.getItem("doctorId");

//   const [petOwnerId] = useState(storedPetOwnerId || "dummy-owner");
//   const [doctorId] = useState(storedDoctorId || "dummy-doctor");

//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");

//   // ✅ Load chat history
//   useEffect(() => {
//     if (!petOwnerId || !doctorId) return;

//     fetch(`http://localhost:5000/api/chats/${petOwnerId}/${doctorId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setMessages(data);
//       })
//       .catch((err) => console.error("❌ Error loading messages:", err));
//   }, [petOwnerId, doctorId]);

//   // ✅ Send new message
//   const sendMessage = async () => {
//     if (!newMessage.trim()) return;

//     try {
//       const res = await fetch("http://localhost:5000/api/chats", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           petOwnerId,
//           doctorId,
//           message: newMessage,
//           sender: "petOwner", // 🔹 or "doctor"
//         }),
//       });

//       const data = await res.json();
//       setMessages([...messages, data]);
//       setNewMessage("");
//     } catch (err) {
//       console.error("❌ Error sending message:", err);
//     }
//   };

//   return (
//     <div style={{ maxWidth: "500px", margin: "0 auto" }}>
//       <h2>Chat</h2>

//       <div
//         style={{
//           border: "1px solid #ccc",
//           padding: "10px",
//           height: "300px",
//           overflowY: "auto",
//           marginBottom: "10px",
//         }}
//       >
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             style={{
//               textAlign: msg.sender === "petOwner" ? "right" : "left",
//               margin: "5px 0",
//             }}
//           >
//             <strong>{msg.sender}:</strong> {msg.message}
//           </div>
//         ))}
//       </div>

//       <input
//         type="text"
//         value={newMessage}
//         onChange={(e) => setNewMessage(e.target.value)}
//         placeholder="Type a message"
//         style={{ width: "70%", padding: "5px" }}
//       />
//       <button onClick={sendMessage} style={{ padding: "5px 10px" }}>
//         Send
//       </button>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import './Chatt.css';

// const Chatt = () => {
//   const [messages, setMessages] = useState([]); // ✅ Always an array
//   const [newMessage, setNewMessage] = useState("");

//   const senderId = "owner123";   // Replace with real logged-in user
//   const receiverId = "doctor123"; // Replace with real doctor id

//   // ✅ Fetch messages
//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/chats/${senderId}/${receiverId}`
//         );
//         console.log("Fetched messages:", res.data);

//         if (Array.isArray(res.data)) {
//           setMessages(res.data);
//         } else {
//           setMessages([]); // fallback
//         }
//       } catch (err) {
//         console.error("❌ Error fetching chats:", err.message);
//         setMessages([]); // prevent crash
//       }
//     };

//     fetchMessages();
//   }, [senderId, receiverId]);

//   // ✅ Send new message
//   const sendMessage = async () => {
//     if (!newMessage.trim()) return;

//     try {
//       const res = await axios.post("http://localhost:5000/api/chats", {
//         senderId,
//         receiverId,
//         message: newMessage,
//       });

//       setMessages((prev) => [...prev, res.data]); // append new msg
//       setNewMessage("");
//     } catch (err) {
//       console.error("❌ Error sending message:", err.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Chat</h2>

//       <div style={{ border: "1px solid gray", padding: "10px", height: "300px", overflowY: "scroll" }}>
//         {messages.length > 0 ? (
//           messages.map((msg) => (
//             <p key={msg._id}>
//               <strong>{msg.senderId}: </strong> {msg.message}
//             </p>
//           ))
//         ) : (
//           <p>No messages yet...</p>
//         )}
//       </div>

//       <input
//         type="text"
//         value={newMessage}
//         onChange={(e) => setNewMessage(e.target.value)}
//         placeholder="Type a message"
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// };

// export default Chatt;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import './Chatt.css';

// export default function Chatt({ petOwnerId = "owner123", doctorId = "doctor123" }) {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [loading, setLoading] = useState(true);

//   // Fetch messages
//   const fetchMessages = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/chats/${petOwnerId}/${doctorId}`);
//       setMessages(res.data);
//       setLoading(false);
//     } catch (err) {
//       console.error("❌ Error fetching chats:", err.message);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMessages();
//     // Optional: refresh every 2 sec for real-time effect
//     const interval = setInterval(fetchMessages, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   // Send message
//   const sendMessage = async () => {
//     if (!newMessage.trim()) return;
//     try {
//       const res = await axios.post("http://localhost:5000/api/chats", {
//         senderId: petOwnerId,
//         receiverId: doctorId,
//         message: newMessage,
//       });
//       setMessages([...messages, res.data]);
//       setNewMessage("");
//     } catch (err) {
//       console.error("❌ Error sending message:", err.message);
//     }
//   };

//   return (
//     <div style={{ width: "400px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
//       <h2 style={{ textAlign: "center" }}>Chat</h2>

//       <div
//         style={{
//           border: "1px solid #ccc",
//           padding: "10px",
//           height: "300px",
//           overflowY: "scroll",
//           background: "#f9f9f9",
//           marginBottom: "10px",
//         }}
//       >
//         {loading ? (
//           <p>Loading...</p>
//         ) : messages.length === 0 ? (
//           <p>No messages yet</p>
//         ) : (
//           messages.map((msg) => (
//             <div
//               key={msg._id}
//               style={{
//                 textAlign: msg.senderId === petOwnerId ? "right" : "left",
//                 margin: "5px 0",
//               }}
//             >
//               <span
//                 style={{
//                   display: "inline-block",
//                   padding: "8px 12px",
//                   borderRadius: "15px",
//                   background: msg.senderId === petOwnerId ? "#4caf50" : "#e0e0e0",
//                   color: msg.senderId === petOwnerId ? "#fff" : "#000",
//                 }}
//               >
//                 {msg.message}
//               </span>
//             </div>
//           ))
//         )}
//       </div>

//       <div style={{ display: "flex" }}>
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type a message..."
//           style={{ flex: 1, padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <button
//           onClick={sendMessage}
//           style={{
//             marginLeft: "5px",
//             padding: "8px 12px",
//             borderRadius: "5px",
//             border: "none",
//             background: "#2196f3",
//             color: "#fff",
//             cursor: "pointer",
//           }}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import './Chatt.css';

// export default function Chatt() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");

//   // Send message locally
//   const sendMessage = () => {
//     if (!newMessage.trim()) return;

//     const msg = {
//       id: Date.now(), // unique id
//       sender: "You",
//       message: newMessage,
//     };

//     setMessages([...messages, msg]); // add to state
//     setNewMessage(""); // clear input
//   };

//   return (
//     <div style={{ width: "400px", margin: "20px auto",marginTop:"150px", fontFamily: "Arial, sans-serif" }}>
//       <h2 style={{ textAlign: "center",color:"blue" }}>CHAT</h2>

//       <div
//         style={{
//           border: "1px solid #ccc",
//           padding: "10px",
//           height: "300px",
//           overflowY: "scroll",
//           background: "#f9f9f9",
//           marginBottom: "10px",
//         }}
//       >
//         {messages.length === 0 ? (
//           <p>No messages yet</p>
//         ) : (
//           messages.map((msg) => (
//             <div key={msg.id} style={{ textAlign: "left", margin: "5px 0" }}>
//               <span
//                 style={{
//                   display: "inline-block",
//                   padding: "8px 12px",
//                   borderRadius: "15px",
//                   background: "#4caf50",
//                   color: "#fff",
//                 }}
//               >
//                 {msg.message}
//               </span>
//             </div>
//           ))
//         )}
//       </div>

//       <div style={{ display: "flex" }}>
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type a message..."
//           style={{ flex: 1, padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
//         />
//         <button
//           onClick={sendMessage}
//           style={{
//             marginLeft: "5px",
//             padding: "8px 12px",
//             borderRadius: "5px",
//             border: "none",
//             background: "#2196f3",
//             color: "#fff",
//             cursor: "pointer",
//           }}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Chatt.css";

export default function Chatt() {
  const { doctorId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const petOwnerId = localStorage.getItem("petOwnerId"); // must be set on login

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    if (!petOwnerId || !doctorId) return;
    try {
      const res = await axios.get(
        `http://localhost:5000/api/chats/${petOwnerId}/${doctorId}`
      );
      setMessages(res.data || []);
    } catch (error) {
      console.error("❌ Error fetching chats:", error);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim()) return;
    try {
      const res = await axios.post("http://localhost:5000/api/chats", {
        sender: petOwnerId,
        receiver: doctorId,
        message: newMessage,
      });
      setMessages([...messages, res.data]); // instantly show message
      setNewMessage("");
    } catch (error) {
      console.error("❌ Error sending message:", error);
    }
  };

  return (
    <div className="chat-container">
      <h2>Chat with Doctor</h2>
      <div className="messages-box">
        {messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg._id}
              className={
                msg.sender === petOwnerId ? "message sent" : "message received"
              }
            >
              {msg.message}
            </div>
          ))
        )}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
