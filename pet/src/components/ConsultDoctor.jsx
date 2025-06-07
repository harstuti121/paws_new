import React, { useState } from "react";
import axios from "axios";

const ConsultDoctor = ({ selectedDoctor, petOwnerId }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/book", {
        petOwnerId,
        doctorId: selectedDoctor._id,
        date,
        time,
      });
      alert(res.data.message);
    } catch (error) {
      console.error("❌ Error booking appointment:", error);
    }
  };

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-bold text-center">📅 Book an Appointment with {selectedDoctor.name}</h2>
      
      <div className="mt-4 flex flex-col items-center">
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border rounded-md mb-2"
        />
        <input 
          type="time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)}
          className="p-2 border rounded-md mb-2"
        />
        
        <button 
          className="bg-green-500 text-white py-2 px-4 rounded-lg mt-3 hover:bg-green-700"
          onClick={handleBooking}
        >
          ✅ Confirm Appointment
        </button>
      </div>
    </div>
  );
};

export default ConsultDoctor;
