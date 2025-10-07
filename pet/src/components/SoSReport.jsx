import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SoSReport.css";

export default function SoSReport() {
  const [form, setForm] = useState({
    petName: "",
    petType: "",
    location: "",
    description: "",
    contact: "",
  });
  const [reports, setReports] = useState([]);

  // Fetch SOS reports
  useEffect(() => {
    axios.get("http://localhost:5000/api/sos")
      .then(res => setReports(res.data))
      .catch(err => console.error(err));
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/sos", form);
      setReports([res.data.report, ...reports]);
      setForm({ petName: "", petType: "", location: "", description: "", contact: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sos-container">
      <h2>🐾 Report a Pet SOS</h2>
      <form className="sos-form" onSubmit={handleSubmit}>
        <input type="text" name="petName" placeholder="Pet Name" value={form.petName} onChange={handleChange} required />
        <input type="text" name="petType" placeholder="Pet Type (Dog/Cat)" value={form.petType} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
        <textarea name="description" placeholder="Description (What's the issue?)" value={form.description} onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Your Contact (Phone/Email)" value={form.contact} onChange={handleChange} required />
        <button type="submit">🚨 Submit SOS</button>
      </form>

      <h3>📢 Active SOS Reports</h3>
      <div className="sos-reports">
        {reports.map((r) => (
          <div key={r._id} className="sos-card">
            <h4>{r.petName} ({r.petType})</h4>
            <p><strong>📍 Location:</strong> {r.location}</p>
            <p>{r.description}</p>
            <p><strong>📞 Contact:</strong> {r.contact}</p>
            <small>⏱ {new Date(r.createdAt).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
