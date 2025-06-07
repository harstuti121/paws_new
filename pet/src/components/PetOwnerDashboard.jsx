import React, { useState } from "react";
import Services from "./Services";
import DoctorList from "./DoctorList"; // ✅ Import Doctor List Component
import Products from "./Product"; // ✅ Import Products Component
import Grooming from "./Grooming"; // ✅ Import Grooming Component
import Book from "./Book"; // ✅ Import Booking Component
import './PetOwnerDashboard.css';

export default function PetOwnerDashboard() {
    const [selectedService, setSelectedService] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    return (
        <div className="container mx-auto py-10 px-4 relative bottom-24">
            {/* <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
                🐾 Pet Owner Dashboard
            </h1> */}
            <h1 className="pet-dashboard-title">
                🐾 Pet Owner Dashboard
            </h1>
            {selectedService === null ? (
                <Services onSelectService={setSelectedService} />
            ) : (
                <>
                    {/* 🔙 Back Button */}
                    <button 
                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all mt-6"
                        onClick={() => {
                            setSelectedService(null);
                            setSelectedDoctor(null);
                        }}
                    >
                        🔙 Back
                    </button>

                    {selectedService === "book" && (
                        selectedDoctor ? (
                            <DoctorList doctorId={selectedDoctor} />
                        ) : (
                            <DoctorList onSelectDoctor={setSelectedDoctor} /> // ✅ Show Doctor List First
                        )
                    )}

                    {selectedService === "shop" && <Products />}
                    {selectedService === "grooming" && <Grooming />}
                </>
            )}
        </div>
    );
}
