// import React, { useState, useEffect, useRef } from "react";
// import { io } from "socket.io-client";
// import dayjs from "dayjs";
// import "./ChatPage.css";

// const socket = io("http://localhost:5000");

// const ChatPage = ({ currentUserId, chatWithId }) => {
//   const [message, setMessage] = useState("");
//   const [chatLog, setChatLog] = useState([]);
//   const chatEndRef = useRef(null);

//   useEffect(() => {
//     socket.emit("join", currentUserId);

//     socket.on("receive-message", ({ senderId, message }) => {
//       setChatLog(prev => [
//         ...prev,
//         { senderId, text: message, timestamp: new Date().toISOString() },
//       ]);
//     });

//     return () => socket.disconnect();
//   }, [currentUserId]);

//   const sendMessage = () => {
//     if (!message.trim()) return;

//     const newMsg = {
//       senderId: currentUserId,
//       receiverId: chatWithId,
//       message,
//       timestamp: new Date().toISOString(),
//     };

//     socket.emit("send-message", newMsg);
//     setChatLog(prev => [...prev, { ...newMsg }]);
//     setMessage("");
//   };

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [chatLog]);

//   return (
//     <div className="flex flex-col h-screen bg-gradient-to-b from-sky-100 to-white">
//       <div className="flex-1 overflow-y-auto p-4 space-y-2">
//         {chatLog.map((msg, i) => {
//           const isSender = msg.senderId === currentUserId;
//           const bubbleStyle = isSender
//             ? "bg-blue-500 text-white self-end rounded-bl-2xl rounded-t-2xl"
//             : "bg-gray-200 text-gray-900 self-start rounded-br-2xl rounded-t-2xl";

//           return (
//             <div key={i} className={`flex flex-col max-w-xs ${isSender ? "items-end" : "items-start"} animate-fadeIn`}>
//               <div className={`px-4 py-2 ${bubbleStyle}`}>
//                 <p>{msg.text}</p>
//               </div>
//               <span className="text-xs text-gray-500 mt-1">
//                 {dayjs(msg.timestamp).format("h:mm A")}
//               </span>
//             </div>
//           );
//         })}
//         <div ref={chatEndRef} />
//       </div>

//       <div className="border-t p-4 flex gap-2 bg-white">
//         <input
//           type="text"
//           className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
//           placeholder="Type a message..."
//           value={message}
//           onChange={e => setMessage(e.target.value)}
//           onKeyDown={e => e.key === "Enter" && sendMessage()}
//         />
//         <button
//           className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
//           onClick={sendMessage}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatPage;


// src/pages/ChatPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Chat from "../components/Chat";

const ChatPage = () => {
  const { recipientId } = useParams();
  const userId = localStorage.getItem("userId");

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Chat</h2>
      <Chat userId={userId} recipientId={recipientId} />
    </div>
  );
};

export default ChatPage;
