import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import "./OwnerChatPage.css"; // optional CSS for styling

const socket = io("http://localhost:5000");

export default function OwnerChatPage() {
  const { doctorId } = useParams();
  const user = JSON.parse(localStorage.getItem("user")); // pet owner
  const ownerId = user?.id;

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    if (ownerId) socket.emit("join", ownerId);

    socket.on("receive-message", ({ senderId, message }) => {
      setChat((prev) => [...prev, { from: senderId, text: message }]);
    });

    // Fetch doctor details
    fetch(`http://localhost:5000/api/doctors/${doctorId}`)
      .then((res) => res.json())
      .then(setDoctor)
      .catch(console.error);

    return () => socket.disconnect();
  }, [ownerId, doctorId]);

  const handleSend = () => {
    if (message.trim() === "") return;

    socket.emit("send-message", {
      senderId: ownerId,
      receiverId: doctorId,
      message,
    });

    setChat((prev) => [...prev, { from: ownerId, text: message }]);
    setMessage("");
  };

  return (
    <div className="owner-chat-container">
      {doctor && (
        <div className="chat-doctor-info">
          <h2>👨‍⚕️ Dr. {doctor.name}</h2>
          <p><strong>Email:</strong> {doctor.email}</p>
          <p><strong>Specialization:</strong> {doctor.specialization || "N/A"}</p>
        </div>
      )}

      <div className="chat-box">
        {chat.map((msg, idx) => (
          <div key={idx} className={msg.from === ownerId ? "chat-msg owner" : "chat-msg doctor"}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={message}
          placeholder="Type your message..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
