import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./PetSOS.css";

const maskContact = (val = "") => {
  if (!val) return "Hidden";
  const email = val.includes("@");
  if (email) {
    const [user, domain] = val.split("@");
    if (!user || !domain) return "Hidden";
    const first = user.slice(0, 2);
    return `${first}${"*".repeat(Math.max(1, user.length - 2))}@${domain}`;
  }
  const digits = val.replace(/\D/g, "");
  if (!digits) return "Hidden";
  return `******${digits.slice(-2)}`;
};

export default function PetSOS() {
  const api = "http://localhost:5000/api/sos";
  const me = JSON.parse(localStorage.getItem("user")) || {}; // {_id, role, name}

  const [form, setForm] = useState({ petName: "", petType: "", location: "", description: "", contact: "", imageUrl: "" });
  const [reports, setReports] = useState([]);
  const [statusFilter, setStatusFilter] = useState("open");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [updatingId, setUpdatingId] = useState(null);

  const fetchReports = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${api}?status=${statusFilter}&q=${encodeURIComponent(search)}`);
      setReports(res.data || []);
    } catch (e) {
      console.error("Failed to load SOS:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchReports(); }, [statusFilter]);

  const filtered = useMemo(() => {
    if (!search.trim()) return reports;
    const q = search.toLowerCase();
    return reports.filter(r =>
      r.petName?.toLowerCase().includes(q) ||
      r.petType?.toLowerCase().includes(q) ||
      r.location?.toLowerCase().includes(q) ||
      r.description?.toLowerCase().includes(q)
    );
  }, [reports, search]);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submitReport = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const payload = { ...form, createdBy: me?._id };
      const res = await axios.post(api, payload);
      setReports((prev) => [res.data.report, ...prev]);
      setForm({ petName: "", petType: "", location: "", description: "", contact: "", imageUrl: "" });
      if (statusFilter !== "open") setStatusFilter("open");
    } catch (e) {
      alert("Failed to submit SOS");
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  // MARK RESOLVED (only by reporter)
  const resolveReport = async (id) => {
    setUpdatingId(id);
    try {
      const res = await axios.put(`${api}/${id}/resolve`, { userId: me?._id });
      setReports((prev) => prev.map(r => (r._id === id ? res.data.report : r)));
    } catch (e) {
      alert("Failed to mark resolved");
    } finally {
      setUpdatingId(null);
    }
  };

  // RESPOND (for doctor/volunteer)
  const respondReport = async (id) => {
    setUpdatingId(id);
    try {
      const res = await axios.put(`${api}/${id}/respond`, { userId: me?._id });
      setReports((prev) => prev.map(r => (r._id === id ? res.data.report : r)));
    } catch (e) {
      alert("Failed to respond");
    } finally {
      setUpdatingId(null);
    }
  };

  const canSeeContact = (r) => me?.role === "doctor" || me?._id === (r?.createdBy?._id || r?.createdBy);

  return (
    <div className="sos-wrap">
      <div className="sos-hero">
        <h1>🚨 SOS Reports</h1>
        <p>Report injured/abandoned pets. Volunteers & doctors can respond quickly.</p>
      </div>

      <div className="sos-grid">
        {/* Form */}
        <div className="sos-card form">
          <h2>Create SOS</h2>
          <form onSubmit={submitReport} className="sos-form">
            <div className="row">
              <input name="petName" placeholder="Pet Name *" value={form.petName} onChange={handleChange} required />
              <select name="petType" value={form.petType} onChange={handleChange} required>
                <option value="">Pet Type *</option>
                <option>Dog</option>
                <option>Cat</option>
                <option>Other</option>
              </select>
            </div>
            <input name="location" placeholder="Location *" value={form.location} onChange={handleChange} required />
            <textarea name="description" placeholder="Describe the situation *" rows={3} value={form.description} onChange={handleChange} required />
            <div className="row">
              <input name="contact" placeholder="Your contact (phone/email) *" value={form.contact} onChange={handleChange} required />
              <input name="imageUrl" placeholder="Image URL (optional)" value={form.imageUrl} onChange={handleChange} />
            </div>
            <button type="submit" disabled={submitting}>{submitting ? "Submitting..." : "🚨 Submit SOS"}</button>
          </form>
        </div>

        {/* List */}
        <div className="sos-card list">
          <div className="sos-toolbar">
            <div className="filters">
              {["open", "resolved", "all"].map(s => (
                <button key={s} className={`chip ${statusFilter === s ? "active" : ""}`} onClick={() => setStatusFilter(s)}>
                  {s.toUpperCase()}
                </button>
              ))}
            </div>
            <input className="search" placeholder="Search by name, type, location..." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e)=> e.key==="Enter" && fetchReports()} />
            <button className="btn" onClick={fetchReports}>Refresh</button>
          </div>

          {loading ? (
            <p className="muted">Loading...</p>
          ) : filtered.length === 0 ? (
            <p className="muted">No SOS reports found.</p>
          ) : (
            <div className="cards">
              {filtered.map((r) => (
                <div key={r._id} className={`item ${r.status}`}>
                  <div className="item-head">
                    <div className="title">
                      <h3>{r.petName} <span className="pill">{r.petType}</span></h3>
                      <p className="loc">📍 {r.location} · <a href={`https://www.google.com/maps/search/${encodeURIComponent(r.location)}`} target="_blank" rel="noreferrer">Open in Maps</a></p>
                    </div>
                    <span className={`status ${r.status}`}>{r.status.toUpperCase()}</span>
                  </div>

                  <div className="item-body">
                    {r.imageUrl ? <img className="thumb" src={r.imageUrl} alt={r.petName} /> : null}
                    <p className="desc">{r.description}</p>
                  </div>

                  <div className="item-foot">
                    <div className="meta">
                      <div>👤 Reporter: {r?.createdBy?.name || "Anonymous"}</div>
                      <div>📞 Contact: {canSeeContact(r) ? (r.contact || "—") : maskContact(r.contact)}</div>
                      <div>⏱ {new Date(r.createdAt || r.createdAt).toLocaleString()}</div>
                    </div>

                    <div className="actions">
                      <a className="btn ghost" href={`https://wa.me/?text=${encodeURIComponent(`SOS ${r.petType} - ${r.petName}\nLocation: ${r.location}\nDetails: ${r.description}\n`)}`} target="_blank" rel="noreferrer">Share</a>

                      {/* Reporter marks resolved */}
                      {r.status === "open" && me?._id === (r?.createdBy?._id || r?.createdBy) && (
                        <button className="btn primary" disabled={updatingId === r._id} onClick={() => resolveReport(r._id)}>
                          {updatingId === r._id ? "Marking..." : "Mark Resolved"}
                        </button>
                      )}

                      {/* Doctor/Volunteer respond */}
                      {r.status === "open" && ["doctor", "volunteer"].includes(me.role) && (
                        <button className="btn secondary" disabled={updatingId === r._id} onClick={() => respondReport(r._id)}>
                          {updatingId === r._id ? "Updating..." : "Respond"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
