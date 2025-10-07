// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function AcceptedAppointments() {
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchAcceptedAppointments = async () => {
//       try {
//         const user = JSON.parse(localStorage.getItem("user"));
//         if (!user?._id) {
//           setError("User not logged in");
//           setLoading(false);
//           return;
//         }

//         const petOwnerId = user._id;

//         const response = await axios.get(
//           `/api/appointments/accepted/${petOwnerId}`
//         );

//         // Defensive check: ensure we have an array
//         const data = Array.isArray(response.data)
//           ? response.data
//           : response.data.appointments || [];

//         setAppointments(data);
//       } catch (err) {
//         console.error("Error fetching accepted appointments:", err);
//         setError("Failed to fetch accepted appointments");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAcceptedAppointments();
//   }, []);

//   if (loading) return <p>Loading accepted appointments...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h2>Accepted Appointments</h2>
//       {appointments.length === 0 ? (
//         <p>No accepted appointments yet.</p>
//       ) : (
//         appointments.map((apt) => (
//           <div key={apt._id} className="appointment-card">
//             <h3>Pet: {apt.petName}</h3>
//             <p>Date: {apt.date}</p>
//             <p>Time: {apt.time}</p>
//             <p>Doctor: {apt.doctorId?.name || "Not assigned"}</p>
//             <p>Email: {apt.doctorId?.email || "Not assigned"}</p>

//             <button
//               onClick={() =>
//                 apt.doctorId?._id &&
//                 window.location.assign(`/chat/${apt.doctorId._id}`)
//               }
//             >
//               Chat with Doctor
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export default function AcceptedAppointments() {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const petOwnerId = user?._id;

//     const fetchAppointments = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/appointments/petowner/${petOwnerId}?status=accepted`
//         );
//         setAppointments(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchAppointments();
//   }, []);

//   return (
//     <div>
//       <h2>Accepted Appointments</h2>
//       {appointments.length === 0 ? (
//         <p>No accepted appointments yet.</p>
//       ) : (
//         appointments.map((apt) => (
//           <div key={apt._id} className="accepted-card">
//             <h3>Pet: {apt.petName}</h3>
//             <p>Date: {apt.date}</p>
//             <p>Time: {apt.time}</p>
//             <p>Doctor: {apt.doctorId?.name}</p>
//             <Link to={`/chat/${apt.doctorId?._id}`}>
//               <button>Chat with Doctor</button>
//             </Link>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import './AcceptedAppointments.css';

// export default function AcceptedAppointments() {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const petOwnerId = user?._id;

//     const fetchAppointments = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/appointments/petowner/${petOwnerId}?status=accepted`
//         );
//         setAppointments(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     // Initial fetch
//     fetchAppointments();

//     // Poll every 5 seconds
//     const interval = setInterval(fetchAppointments, 5000);

//     // Clean up interval on unmount
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <h2>Accepted Appointments</h2>
//       {appointments.length === 0 ? (
//         <p>No accepted appointments yet.</p>
//       ) : (
//         appointments.map((apt) => (
//           <div key={apt._id} className="accepted-card">
//             <h3>Pet: {apt.petName}</h3>
//             <p>Date: {apt.date}</p>
//             <p>Time: {apt.time}</p>
//             <p>Doctor: {apt.doctorId?.name}</p>
//             <Link to={`/chat/${apt.doctorId?._id}`}>
//               <button>Chat with Doctor</button>
//             </Link>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./AcceptedAppointments.css";

// export default function AcceptedAppointments() {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const petOwnerId = user?._id;

//     const fetchAppointments = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/appointments/petowner/${petOwnerId}?status=accepted`
//         );
//         setAppointments(res.data);
//       } catch (err) {
//         console.error("Error fetching accepted appointments:", err);
//       }
//     };

//     fetchAppointments();
//     const interval = setInterval(fetchAppointments, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // ✅ Date + Time Formatter
//   const formatDate = (dateString) => {
//     if (!dateString) return "Not provided";
//     const date = new Date(dateString);
//     if (isNaN(date.getTime())) return dateString; // fallback if not valid
//     return date.toLocaleDateString("en-IN", {
//       weekday: "short",
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   const formatTime = (timeString) => {
//     if (!timeString) return "Not provided";
//     return timeString;
//   };

//   return (
//     <div>
//       <h2>Accepted Appointments</h2>
//       {appointments.length === 0 ? (
//         <p>No accepted appointments yet.</p>
//       ) : (
//         appointments.map((apt) => (
//           <div key={apt._id} className="accepted-card">
//             <h3>🐾 Pet: {apt.petName || "Unnamed Pet"}</h3>
//             <p>Date: {formatDate(apt.date)}</p>
//             <p>Time: {formatTime(apt.time)}</p>
//             <p>Doctor: {apt.doctorId?.name || "Not available"}</p>
//             <p>Owner Contact: {apt.ownerContact || "Not provided"}</p>
//             <Link to={`/chat/${apt.doctorId?._id}`}>
//               <button>Chat with Doctor</button>
//             </Link>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./AcceptedAppointments.css";

// export default function AcceptedAppointments() {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const petOwnerId = user?._id;

//     const fetchAppointments = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/appointments/petowner/${petOwnerId}?status=accepted`
//         );
//         setAppointments(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchAppointments();
//     const interval = setInterval(fetchAppointments, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // helper to format date
//   const formatDate = (dateString) => {
//     if (!dateString) return "N/A";
//     const d = new Date(dateString);
//     return isNaN(d.getTime()) ? "N/A" : d.toLocaleDateString();
//   };

//   return (
//     <div>
//       <h2>Accepted Appointments</h2>
//       {appointments.length === 0 ? (
//         <p>No accepted appointments yet.</p>
//       ) : (
//         appointments.map((apt) => (
//           <div key={apt._id} className="accepted-card">
//             <h3>🐾 {apt.petName || "Unnamed Pet"}</h3>
//             <p><strong>Date:</strong> {a.date ? new Date(a.date).toLocaleDateString() : "Not set"}</p>
//             <p><strong>Time:</strong> {a.time || "Not set"}</p>
//             <p>Status: {apt.status}</p>
//             <p>Doctor: {apt.doctorId?.name || "Unknown Doctor"}</p>
//             <p>Owner Contact: {apt.petOwnerId?.email || "N/A"}</p>
//             <Link to={`/chat/${apt.doctorId?._id}`}>
//               <button>💬 Chat with Doctor</button>
//             </Link>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import './AcceptedAppointments.css';

// export default function AcceptedAppointments() {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const petOwnerId = user?._id;

//     const fetchAppointments = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/appointments/petowner/${petOwnerId}?status=accepted`
//         );
//         setAppointments(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchAppointments();
//     const interval = setInterval(fetchAppointments, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <h2>Accepted Appointments</h2>
//       {appointments.length === 0 ? (
//         <p>No accepted appointments yet.</p>
//       ) : (
//         appointments.map((apt) => (
//           <div key={apt._id} className="accepted-card">
//             <h3>🐾 {apt.petName || "Unnamed Pet"}</h3>
//             <p>Date: {apt.date ? new Date(apt.date).toLocaleDateString() : "N/A"}</p>
//             <p>Time: {apt.time || "N/A"}</p>
//             <p>Status: {apt.status}</p>
//             <p>Doctor: {apt.doctorId?.name || "Doctor not found"}</p>
//             <p>Owner Contact: {apt.petOwnerId?.email || "N/A"}</p>
//             <Link to={`/chat/${apt.doctorId?._id}`}>
//               <button>Chat with Doctor</button>
//             </Link>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "./AcceptedAppointments.css";

// export default function AcceptedAppointments() {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const petOwnerId = localStorage.getItem("petOwnerId");
//         const res = await axios.get(
//           `http://localhost:5000/api/appointments/petowner/${petOwnerId}`
//         );

//         // ✅ Only keep accepted appointments
//         const accepted = res.data.filter(
//           (appt) => appt.status === "Accepted"
//         );
//         setAppointments(accepted);
//       } catch (error) {
//         console.error("Error fetching appointments:", error);
//       }
//     };

//     fetchAppointments();
//   }, []);

//   return (
//     <div className="accepted-appointments-container">
//       <h2 className="accepted-appointments-title">Accepted Appointments</h2>
//       {appointments.length === 0 ? (
//         <p className="no-appointments">No accepted appointments yet.</p>
//       ) : (
//         <div className="appointments-grid">
//           {appointments.map((appt) => (
//             <div key={appt._id} className="appointment-card">
//               {appt.petName && <h3>🐾 {appt.petName}</h3>}
//               {appt.date && <p><strong>Date:</strong> {new Date(appt.date).toLocaleDateString()}</p>}
//               {appt.time && <p><strong>Time:</strong> {appt.time}</p>}
//               {appt.petOwnerName && <p><strong>Owner Name:</strong> {appt.petOwnerName}</p>}
//               {appt.petOwnerEmail && <p><strong>Owner Email:</strong> {appt.petOwnerEmail}</p>}

//               {/* ✅ Only show if doctor info exists */}
//               {appt.doctorId && (
//                 <>
//                   <p><strong>Doctor:</strong> {appt.doctorId.name}</p>
//                   <p><strong>Email:</strong> {appt.doctorId.email}</p>
//                 </>
//               )}

//               <Link
//                 to={`/chat/${appt.doctorId?._id}`}
//                 className="chat-button"
//               >
//                 💬 Chat with Pet Owner
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AcceptedAppointments.css";

export default function AcceptedAppointments() {
  const [appointments, setAppointments] = useState([]);
  const petOwnerId = localStorage.getItem("petOwnerId");

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!petOwnerId) {
        console.error("Pet Owner ID missing!");
        return;
      }
      try {
        const res = await axios.get(
          `http://localhost:5000/api/appointments/petowner/${petOwnerId}`
        );
        const accepted = res.data.filter((appt) => appt.status === "Accepted");
        setAppointments(accepted);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div className="accepted-appointments-container">
      <h2>Accepted Appointments</h2>
      {appointments.length === 0 ? (
        <p>No accepted appointments yet.</p>
      ) : (
        <div className="appointments-grid">
          {appointments.map((appt) => (
            <div key={appt._id} className="appointment-card">
              {appt.petName && <h3>🐾 {appt.petName}</h3>}
              {appt.date && (
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(appt.date).toLocaleDateString()}
                </p>
              )}
              {appt.time && <p><strong>Time:</strong> {appt.time}</p>}
              {appt.doctorId && (
                <>
                  <p><strong>Doctor:</strong> {appt.doctorId.name}</p>
                  <p><strong>Email:</strong> {appt.doctorId.email}</p>
                  <Link to={`/chat/${appt.doctorId._id}`} className="chat-button">
                    💬 Chat with Doctor
                  </Link>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "./AcceptedAppointments.css";

// export default function AcceptedAppointments() {
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         // ✅ Get pet owner ID from localStorage
//         const petOwnerId = localStorage.getItem("petOwnerId");

//         if (!petOwnerId) {
//           console.error("Pet Owner ID missing!");
//           setLoading(false);
//           return;
//         }

//         // ✅ Fetch appointments for this pet owner
//         const res = await axios.get(
//           `http://localhost:5000/api/appointments/petowner/${petOwnerId}`
//         );

//         // ✅ Keep only accepted appointments
//         const accepted = res.data.filter((appt) => appt.status === "Accepted");
//         setAppointments(accepted);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching appointments:", error);
//         setLoading(false);
//       }
//     };

//     fetchAppointments();
//   }, []);

//   return (
//     <div className="accepted-appointments-container">
//       <h2 className="accepted-appointments-title">Accepted Appointments</h2>

//       {loading ? (
//         <p>Loading appointments...</p>
//       ) : appointments.length === 0 ? (
//         <p className="no-appointments">No accepted appointments yet.</p>
//       ) : (
//         <div className="appointments-grid">
//           {appointments.map((appt) => (
//             <div key={appt._id} className="appointment-card">
//               {appt.petName && <h3>🐾 {appt.petName}</h3>}
//               {appt.date && (
//                 <p>
//                   <strong>Date:</strong>{" "}
//                   {new Date(appt.date).toLocaleDateString()}
//                 </p>
//               )}
//               {appt.time && (
//                 <p>
//                   <strong>Time:</strong> {appt.time}
//                 </p>
//               )}
//               {appt.petOwnerName && (
//                 <p>
//                   <strong>Owner Name:</strong> {appt.petOwnerName}
//                 </p>
//               )}
//               {appt.petOwnerEmail && (
//                 <p>
//                   <strong>Owner Email:</strong> {appt.petOwnerEmail}
//                 </p>
//               )}

//               {/* ✅ Show doctor info only if exists */}
//               {appt.doctorId && (
//                 <>
//                   <p>
//                     <strong>Doctor:</strong> {appt.doctorId.name}
//                   </p>
//                   <p>
//                     <strong>Email:</strong> {appt.doctorId.email}
//                   </p>
//                   <Link
//                     to={`/chat/${appt.doctorId._id}`}
//                     className="chat-button"
//                   >
//                     💬 Chat with Doctor
//                   </Link>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
