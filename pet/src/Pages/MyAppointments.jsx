import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./MyAppointments.css";

export default function MyAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));
  const petOwnerId = user?._id;

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/appointments/accepted/${petOwnerId}`);
        setAppointments(res.data);
      } catch {
        setError("Failed to load appointments.");
      } finally {
        setLoading(false);
      }
    };

    if (petOwnerId) fetchAppointments();
  }, [petOwnerId]);

  if (loading) return <p className="owner-loading">Loading your appointments...</p>;
  if (error) return <p className="owner-error">{error}</p>;

  return (
    <div className="owner-container">
      <h2 className="owner-heading">My Accepted Appointments</h2>
      {appointments.length === 0 ? (
        <p className="owner-empty">No accepted appointments yet.</p>
      ) : (
        <div className="owner-cards">
          {appointments.map((appointment) => (
            <div key={appointment._id} className="owner-card">
              <h3 className="owner-pet-name">🐾 {appointment.petDetails?.name || "Unnamed Pet"}</h3>
              <div className="owner-grid">
                <div><strong>Doctor:</strong> {appointment.doctorId?.name}</div>
                <div><strong>Date:</strong> {new Date(appointment.dateSlot).toLocaleDateString()}</div>
                <div><strong>Time:</strong> {appointment.timeSlot}</div>
                <div><strong>Status:</strong> <span className="owner-status bg-green">Accepted</span></div>
              </div>
              {appointment.notes && (
                <div className="owner-notes">
                  <strong>Doctor's Notes:</strong>
                  <p>{appointment.notes}</p>
                </div>
              )}
              <Link to={`/chat/${appointment.doctorId?._id}`} className="owner-chat-btn">
                💬 Chat with Doctor
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
