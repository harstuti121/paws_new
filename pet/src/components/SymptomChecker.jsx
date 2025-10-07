// src/components/SymptomChecker.jsx
import React, { useMemo, useState } from "react";
import axios from "axios";
import "./SymptomChecker.css";
import { useNavigate } from "react-router-dom";

const SYMPTOM_OPTIONS = [
  { id: "difficulty_breathing", label: "Difficulty breathing" },
  { id: "seizures", label: "Seizures" },
  { id: "severe_bleeding", label: "Severe bleeding" },
  { id: "pale_gums", label: "Pale/white gums" },
  { id: "bloated_abdomen", label: "Sudden bloated abdomen" },
  { id: "straining_to_urinate", label: "Straining to urinate" },
  { id: "unconscious", label: "Unconscious/collapsed" },
  { id: "hit_by_car", label: "Trauma (e.g., hit by car)" },

  { id: "vomiting", label: "Vomiting" },
  { id: "diarrhea", label: "Diarrhea" },
  { id: "not_eating", label: "Not eating" },
  { id: "fever", label: "Fever" },
  { id: "lethargy", label: "Lethargy" },
  { id: "limping", label: "Limping" },
  { id: "coughing", label: "Coughing" },

  { id: "sneezing", label: "Sneezing" },
  { id: "mild_cough", label: "Mild cough" },
  { id: "minor_wound", label: "Minor wound" },
  { id: "itching", label: "Itching" },
  { id: "ear_shake", label: "Ear shaking/head tilt" },
];

export default function SymptomChecker() {
  const navigate = useNavigate();
  const me = JSON.parse(localStorage.getItem("user")) || {};
  const [form, setForm] = useState({
    petType: "dog",
    ageYears: "",
    weightKg: "",
    symptoms: [],
    durationHours: "",
    temperatureC: "",
    poisonExposure: false,
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const canSubmit = useMemo(() => form.symptoms.length > 0, [form.symptoms]);

  const toggleSymptom = (id) => {
    setForm((f) => ({
      ...f,
      symptoms: f.symptoms.includes(id)
        ? f.symptoms.filter((x) => x !== id)
        : [...f.symptoms, id],
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({
      ...f,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    try {
      const payload = {
        petType: form.petType,
        ageYears: Number(form.ageYears) || 0,
        weightKg: Number(form.weightKg) || 0,
        symptoms: form.symptoms,
        durationHours: Number(form.durationHours) || 0,
        temperatureC: form.temperatureC ? Number(form.temperatureC) : null,
        poisonExposure: !!form.poisonExposure,
      };
      const res = await axios.post("http://localhost:5000/api/symptoms/check", payload);
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to analyze symptoms.");
    } finally {
      setLoading(false);
    }
  };

  const urgencyClass =
    result?.urgency === "emergency"
      ? "urgency emergency"
      : result?.urgency === "urgent"
      ? "urgency urgent"
      : "urgency home";

  return (
    <div className="symp-wrap">
      <div className="symp-hero">
        <h1>🐾 Pet Symptom Checker</h1>
        <p>
          Quick triage to help you decide next steps. This is not a diagnosis — always consult a vet if unsure.
        </p>
      </div>

      <div className="symp-grid">
        {/* Left: Form */}
        <div className="symp-card">
          <form onSubmit={submit} className="symp-form">
            <div className="row">
              <label>
                Pet Type
                <select name="petType" value={form.petType} onChange={handleChange} required>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label>
                Age (years)
                <input name="ageYears" type="number" min="0" step="0.1" value={form.ageYears} onChange={handleChange} />
              </label>
              <label>
                Weight (kg)
                <input name="weightKg" type="number" min="0" step="0.1" value={form.weightKg} onChange={handleChange} />
              </label>
            </div>

            <div className="symptom-box">
              <div className="symptom-head">
                <h3>Symptoms</h3>
                <small>Select all that apply</small>
              </div>
              <div className="symptom-list">
                {SYMPTOM_OPTIONS.map((s) => (
                  <label key={s.id} className={`chip ${form.symptoms.includes(s.id) ? "active" : ""}`}>
                    <input
                      type="checkbox"
                      checked={form.symptoms.includes(s.id)}
                      onChange={() => toggleSymptom(s.id)}
                    />
                    {s.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="row">
              <label>
                Duration (hours)
                <input
                  name="durationHours"
                  type="number"
                  min="0"
                  value={form.durationHours}
                  onChange={handleChange}
                  placeholder="e.g., 12"
                />
              </label>
              <label>
                Temperature (°C)
                <input
                  name="temperatureC"
                  type="number"
                  step="0.1"
                  value={form.temperatureC}
                  onChange={handleChange}
                  placeholder="Optional"
                />
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="poisonExposure"
                  checked={form.poisonExposure}
                  onChange={handleChange}
                />
                Suspected poison exposure
              </label>
            </div>

            <button type="submit" disabled={loading || !canSubmit}>
              {loading ? "Analyzing..." : "Check Symptoms"}
            </button>
          </form>
        </div>

        {/* Right: Result */}
        <div className="symp-card">
          {!result ? (
            <p className="muted">Fill the form and click “Check Symptoms” to see guidance.</p>
          ) : (
            <div className="result">
              <div className={urgencyClass}>
                Urgency:{" "}
                {result.urgency === "emergency"
                  ? "EMERGENCY — seek immediate care"
                  : result.urgency === "urgent"
                  ? "URGENT — see a vet within 24 hours"
                  : "HOME — monitor & home care likely okay"}
              </div>

              {result.reasons?.length > 0 && (
                <>
                  <h4>Why</h4>
                  <ul className="bullets">
                    {result.reasons.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </>
              )}

              {result.likelyIssues?.length > 0 && (
                <>
                  <h4>Likely areas</h4>
                  <div className="tags">
                    {result.likelyIssues.map((t, i) => (
                      <span key={i} className="tag">{t}</span>
                    ))}
                  </div>
                </>
              )}

              {result.advice?.length > 0 && (
                <>
                  <h4>What you can do</h4>
                  <ul className="bullets">
                    {result.advice.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </>
              )}

              <div className="cta-row">
                <button className="btn ghost" onClick={() => navigate("/pet-owner-dashboard")}>
                  Book Appointment
                </button>
                <button className="btn" onClick={() => navigate("/chat")}>
                  Open Chat
                </button>
                <button className="btn danger" onClick={() => navigate("/sos")}>
                  🚨 Create SOS
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="disclaimer">
        Disclaimer: This tool provides general guidance and is not a substitute for professional veterinary care.
      </p>
    </div>
  );
}
