import React, { useState, useEffect } from "react";

export default function SalonList({ onSelectSalon }) {
  const [salons, setSalons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/salons")
      .then((res) => res.json())
      .then((data) => setSalons(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Available Grooming Salons</h2>
      {salons.map((salon) => (
        <div key={salon._id} style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
          <h3>{salon.name}</h3>
          <p>{salon.address}</p>
          <p>Contact: {salon.contact}</p>
          <button onClick={() => onSelectSalon(salon)}>Choose this Salon</button>
        </div>
      ))}
    </div>
  );
}
