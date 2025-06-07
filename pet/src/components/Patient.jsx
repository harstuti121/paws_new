import React, { useState, useEffect } from "react";

const Patient = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Simulating fetching patient data (Replace with actual API call)
    const fetchPatients = async () => {
      const data = [
        { id: 1, name: "John Doe", age: 30, condition: "Flu" },
        { id: 2, name: "Jane Smith", age: 25, condition: "Cold" },
      ];
      setPatients(data);
    };
    fetchPatients();
  }, []);

  return (
    <div>
      <h2>Patient List</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            <strong>{patient.name}</strong> - Age: {patient.age}, Condition: {patient.condition}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patient;
