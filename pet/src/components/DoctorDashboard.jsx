import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DoctorDashboard() {
    const { doctorId } = useParams(); // ✅ Get Doctor ID from URL
    const [appointments, setAppointments] = useState([]);

    // ✅ Fetch Appointments for the Doctor
    useEffect(() => {
        fetch(`http://localhost:5000/api/appointments/${doctorId}`)
            .then((res) => res.json())
            .then((data) => setAppointments(data))
            .catch((err) => console.error("❌ Error fetching appointments:", err));
    }, [doctorId]);

    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-4xl font-bold text-center">🩺 Doctor Dashboard</h1>

            {appointments.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    {appointments.map((appointment) => (
                        <div key={appointment._id} className="bg-white shadow-md p-4 rounded-lg">
                            <h3 className="text-lg font-bold">🐾 Pet: {appointment.petName}</h3>
                            <p>📅 Date: {appointment.dateSlot}</p>
                            <p>⏰ Time: {appointment.timeSlot}</p>
                            <p>📞 Contact: {appointment.phone}</p>
                            <p>👨‍⚕️ Pet Owner: {appointment.ownerName}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-6">No Appointments Available</p>
            )}
        </div>
    );
}
