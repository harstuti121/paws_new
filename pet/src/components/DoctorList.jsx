// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function DoctorList() {
//     const [doctors, setDoctors] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetch("http://localhost:5000/api/doctors")
//             .then((res) => res.json())
//             .then((data) => setDoctors(data))
//             .catch((err) => console.error("❌ Error fetching doctors:", err));
//     }, []);

//     return (
//         <div className="container mx-auto py-10 px-4">
//             <h2 className="text-3xl font-bold text-center mb-6">🩺 Available Doctors</h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {doctors.map((doctor) => (
//                     <div key={doctor._id} className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition">
//                         <h3 className="text-lg font-bold">{doctor.name}</h3>
//                         <p className="text-gray-600">{doctor.specialization}</p>
//                         <p className="text-gray-500">{doctor.experience} years experience</p>
//                         <p className="text-green-600 font-semibold">{doctor.fees} INR</p>
//                         <button 
//                             className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600"
//                             onClick={() => navigate(`/book/${doctor._id}`)} // ✅ Navigate to Booking Page
//                         >
//                             Select Doctor
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './DoctorList.css';

export default function DoctorList() {
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/api/doctors")
            .then((res) => res.json())
            .then((data) => setDoctors(data))
            .catch((err) => console.error("❌ Error fetching doctors:", err));
    }, []);

    const renderDoctorInfo = (label, value) => {
        if (value) {
            return (
                <p className="doctor-info">{label}: {value}</p>
            );
        }
        return null;
    };

    return (
        <div className="doctor-list-container">
            <h2 className="title">🩺 Available Doctors</h2>

            <div className="doctor-cards-container">
                {doctors.map((doctor) => (
                    <div
                        key={doctor._id}
                        className="doctor-card"
                    >
                        <img
                            src={doctor.image || "https://via.placeholder.com/150"}
                            alt={doctor.name}
                            className="doctor-image"
                        />
                        <h3 className="doctor-name">{doctor.name}</h3>
                        <p className="doctor-specialization">{doctor.specialization}</p>

                        {/* Render dynamic doctor information */}
                        {renderDoctorInfo("Experience", doctor.experience ? `${doctor.experience} years` : "N/A")}
                        {renderDoctorInfo("Price", doctor.fees ? `${doctor.fees} INR` : "Price not available")}
                        
                        {/* Optional: If you want to show reviews or ratings */}
                        {doctor.ratings && (
                            <p className="doctor-ratings">Ratings: {doctor.ratings} ⭐</p>
                        )}

                        <button
                            className="select-doctor-button"
                            onClick={() => navigate(`/book/${doctor._id}`)}
                        >
                            Select Doctor
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
