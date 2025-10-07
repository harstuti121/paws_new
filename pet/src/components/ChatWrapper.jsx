// import React from "react";
// import { useParams } from "react-router-dom";
// import Chat from "./Chat";

// export default function ChatWrapper() {
//   const { ownerId } = useParams();
//   const user = JSON.parse(localStorage.getItem("user"));
//   const doctorId = user?.id;

//   return (
//     <div style={{ padding: "1rem" }}>
//       <h2>💬 Chat with Pet Owner</h2>
//       <Chat userId={doctorId} recipientId={ownerId} />
//     </div>
//   );
// }

// import { useParams } from "react-router-dom";
// import ChatPage from "./ChatPage";

// export default function ChatWrapper() {
//   const { id } = useParams(); // This is the person you're chatting with
//   const user = JSON.parse(localStorage.getItem("user"));
//   const currentUserId = user?.id;

//   return <ChatPage currentUserId={currentUserId} chatWithId={id} />;
// }

import { useParams } from "react-router-dom";
import Chat from "./Chat";

const ChatWrapper = () => {
  const { receiverId } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  return <Chat userId={user._id} receiverId={receiverId} />;
};

export default ChatWrapper;

