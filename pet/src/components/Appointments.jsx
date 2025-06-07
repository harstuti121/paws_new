import React, { useEffect, useState } from "react";
import "./Appointment.css";

export default function Appointments() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/appointments")
            .then((res) => res.json())
            .then((data) => {
                setAppointments(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to fetch appointments.");
                setLoading(false);
            });
    }, []);

    const updateStatus = (id, newStatus) => {
        fetch(`http://localhost:5000/api/appointments/${id}/status`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: newStatus }),
        })
            .then((res) => res.json())
            .then(() => {
                setAppointments((prev) =>
                    prev.map((appointment) =>
                        appointment._id === id ? { ...appointment, status: newStatus } : appointment
                    )
                );
            })
            .catch(() => setError("Error updating status."));
    };

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold text-center">📅 Doctor's Appointments</h1>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {loading && <p className="text-gray-500 text-center">Loading...</p>}

            {appointments.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {appointments.map((appointment) => (
                        <div key={appointment._id} className="bg-white shadow-md p-6 rounded-lg text-center">
                            <h3 className="text-lg font-bold mb-2">{appointment.petDetails?.name || "No Name"}</h3>
                            <p><strong>Species:</strong> {appointment.petDetails?.species || "N/A"}</p>
                            <p><strong>Breed:</strong> {appointment.petDetails?.breed || "N/A"}</p>
                            <p><strong>Date:</strong> {appointment.dateSlot ? new Date(appointment.dateSlot).toLocaleDateString() : "Not Available"}</p>
                            <p><strong>Time:</strong> {appointment.timeSlot || "Not Available"}</p>
                            <p><strong>Status:</strong> <span className="font-semibold">{appointment.status}</span></p>
                            <p><strong>Owner Contact:</strong> {appointment.ownerContact || "Not Available"}</p>

                            {appointment.status === "Pending" && (
                                <div className="mt-4 flex justify-center gap-4">
                                    <button
                                        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400"
                                        onClick={() => updateStatus(appointment._id, "Accepted")}
                                    >
                                        ✅ Accept
                                    </button>
                                    <button
                                        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400"
                                        onClick={() => updateStatus(appointment._id, "Rejected")}
                                    >
                                        ❌ Reject
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                !loading && <p className="text-gray-500 text-center mt-4">No appointments available.</p>
            )}
        </div>
    );
}
