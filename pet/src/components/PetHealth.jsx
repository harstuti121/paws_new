// // src/components/PetHealth.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function PetHealth({ petId }) {
//   const user = JSON.parse(localStorage.getItem("user")) || {};
//   const [record, setRecord] = useState({ vaccinations: [], weightHistory: [] });
//   const [form, setForm] = useState({ name: "", dateAdministered: "", nextDueDate: "", notes: "" });
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);

//   const api = "http://localhost:5000/api/pet-health";

//   const fetchRecord = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(`${api}/${petId}/${user._id}`);
//       setRecord(res.data);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => { fetchRecord(); }, []);

//   const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     try {
//       await axios.post(api, { petId, ownerId: user._id, vaccination: form });
//       setForm({ name: "", dateAdministered: "", nextDueDate: "", notes: "" });
//       fetchRecord();
//     } catch (err) {
//       console.error(err);
//       alert("Failed to add vaccination");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="pet-health">
//       <h2>Pet Health & Vaccination Tracker</h2>

//       <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
//         <input name="name" placeholder="Vaccine Name" value={form.name} onChange={handleChange} required />
//         <input name="dateAdministered" type="date" value={form.dateAdministered} onChange={handleChange} required />
//         <input name="nextDueDate" type="date" value={form.nextDueDate} onChange={handleChange} />
//         <input name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} />
//         <button type="submit" disabled={submitting}>{submitting ? "Adding..." : "Add Vaccination"}</button>
//       </form>

//       {loading ? <p>Loading...</p> : (
//         <div>
//           <h3>Vaccinations:</h3>
//           {record.vaccinations.length === 0 ? <p>No records found.</p> :
//             <ul>
//               {record.vaccinations.map((v, i) => (
//                 <li key={i}>
//                   {v.name} | Administered: {new Date(v.dateAdministered).toLocaleDateString()} | Next Due: {v.nextDueDate ? new Date(v.nextDueDate).toLocaleDateString() : "—"} | {v.notes}
//                 </li>
//               ))}
//             </ul>
//           }
//         </div>
//       )}
//     </div>
//   );
// }


// src/components/PetHealth.jsx
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function PetHealth({ petId }) {
//   const ownerId = JSON.parse(localStorage.getItem("user"))?._id;
//   const [record, setRecord] = useState(null);
//   const [form, setForm] = useState({
//     name: "",
//     dateAdministered: "",
//     nextDueDate: "",
//     notes: "",
//     weight: "",
//     generalNotes: ""
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchHealth();
//   }, []);

//   const fetchHealth = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/pet-health/${petId}/${ownerId}`);
//       setRecord(res.data);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = {
//         petId,
//         ownerId,
//         vaccinations: form.name ? [{
//           name: form.name,
//           dateAdministered: form.dateAdministered,
//           nextDueDate: form.nextDueDate,
//           notes: form.notes
//         }] : [],
//         weight: form.weight || undefined,
//         notes: form.generalNotes || undefined
//       };
//       await axios.post("http://localhost:5000/api/pet-health", payload);
//       setForm({
//         name: "",
//         dateAdministered: "",
//         nextDueDate: "",
//         notes: "",
//         weight: "",
//         generalNotes: ""
//       });
//       fetchHealth();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="pet-health">
//       <h2>Pet Health & Vaccination Tracker</h2>

//       {/* Vaccination + Weight Form */}
//       <form onSubmit={handleSubmit}>
//         <h3>Add Vaccination</h3>
//         <input name="name" placeholder="Vaccine Name" value={form.name} onChange={handleChange} />
//         <input name="dateAdministered" type="date" placeholder="Date Administered" value={form.dateAdministered} onChange={handleChange} />
//         <input name="nextDueDate" type="date" placeholder="Next Due Date" value={form.nextDueDate} onChange={handleChange} />
//         <input name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} />
        
//         <h3>Add Weight / Notes</h3>
//         <input name="weight" type="number" placeholder="Weight (kg)" value={form.weight} onChange={handleChange} />
//         <textarea name="generalNotes" placeholder="General Notes" value={form.generalNotes} onChange={handleChange}></textarea>

//         <button type="submit">Save</button>
//       </form>

//       {/* Display Vaccinations */}
//       {record?.vaccinations?.length > 0 && (
//         <div>
//           <h3>Vaccinations</h3>
//           <ul>
//             {record.vaccinations.map((v, i) => (
//               <li key={i}>
//                 {v.name} | Administered: {new Date(v.dateAdministered).toLocaleDateString()} | Next Due: {v.nextDueDate ? new Date(v.nextDueDate).toLocaleDateString() : "-"} | Notes: {v.notes || "-"}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Display Weight History */}
//       {record?.weightHistory?.length > 0 && (
//         <div>
//           <h3>Weight History</h3>
//           <ul>
//             {record.weightHistory.map((w, i) => (
//               <li key={i}>{new Date(w.date).toLocaleDateString()} — {w.weight} kg</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* General Notes */}
//       {record?.notes && (
//         <div>
//           <h3>Notes</h3>
//           <p>{record.notes}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./PetHealth.css";

// export default function PetHealth({ petId }) {
//   const ownerId = JSON.parse(localStorage.getItem("user"))?._id;
//   const [record, setRecord] = useState(null);
//   const [form, setForm] = useState({
//     name: "",
//     dateAdministered: "",
//     nextDueDate: "",
//     notes: "",
//     weight: "",
//     generalNotes: ""
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!petId || !ownerId) {
//       setLoading(false);
//       return;
//     }
//     fetchHealth();
//   }, [petId, ownerId]);

//   const fetchHealth = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/pet-health/${petId}/${ownerId}`);
//       setRecord(res.data || null); // if no record, set null
//     } catch (err) {
//       console.log("Fetch failed:", err);
//       setRecord(null); // no record exists yet
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = {
//         petId,
//         ownerId,
//         vaccinations: form.name ? [{
//           name: form.name,
//           dateAdministered: form.dateAdministered,
//           nextDueDate: form.nextDueDate,
//           notes: form.notes
//         }] : [],
//         weight: form.weight || undefined,
//         notes: form.generalNotes || undefined
//       };
//       await axios.post("http://localhost:5000/api/pet-health", payload);
//       setForm({
//         name: "",
//         dateAdministered: "",
//         nextDueDate: "",
//         notes: "",
//         weight: "",
//         generalNotes: ""
//       });
//       fetchHealth(); // refresh record
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="pet-health">
//       <h2>Pet Health & Vaccination Tracker</h2>

//       {/* Vaccination + Weight Form */}
//       <form onSubmit={handleSubmit}>
//         <h3>{record ? "Add Another Vaccination / Update" : "Add Vaccination & Health Info"}</h3>
//         <input name="name" placeholder="Vaccine Name" value={form.name} onChange={handleChange} />
//         <input name="dateAdministered" type="date" placeholder="Date Administered" value={form.dateAdministered} onChange={handleChange} />
//         <input name="nextDueDate" type="date" placeholder="Next Due Date" value={form.nextDueDate} onChange={handleChange} />
//         <input name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} />
        
//         <h3>Weight / General Notes</h3>
//         <input name="weight" type="number" placeholder="Weight (kg)" value={form.weight} onChange={handleChange} />
//         <textarea name="generalNotes" placeholder="General Notes" value={form.generalNotes} onChange={handleChange}></textarea>

//         <button type="submit">{record ? "Update Record" : "Save Record"}</button>
//       </form>

//       {/* Display Vaccinations */}
//       {record?.vaccinations?.length > 0 && (
//         <div>
//           <h3>Vaccinations</h3>
//           <ul>
//             {record.vaccinations.map((v, i) => (
//               <li key={i}>
//                 {v.name} | Administered: {new Date(v.dateAdministered).toLocaleDateString()} | Next Due: {v.nextDueDate ? new Date(v.nextDueDate).toLocaleDateString() : "-"} | Notes: {v.notes || "-"}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Display Weight History */}
//       {record?.weightHistory?.length > 0 && (
//         <div>
//           <h3>Weight History</h3>
//           <ul>
//             {record.weightHistory.map((w, i) => (
//               <li key={i}>{new Date(w.date).toLocaleDateString()} — {w.weight} kg</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* General Notes */}
//       {record?.notes && (
//         <div>
//           <h3>Notes</h3>
//           <p>{record.notes}</p>
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "./PetHealth.css";

// export default function PetHealth() {
//   const { petId } = useParams(); // Get petId from URL
//   const ownerId = JSON.parse(localStorage.getItem("user"))?._id;
//   const [record, setRecord] = useState(null);
//   const [form, setForm] = useState({
//     name: "",
//     dateAdministered: "",
//     nextDueDate: "",
//     notes: "",
//     weight: "",
//     generalNotes: ""
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (petId) fetchHealth();
//   }, [petId]);

//   const fetchHealth = async () => {
//     try {
//       if (petId) {
//         const res = await axios.get(`http://localhost:5000/api/pet-health/${petId}/${ownerId}`);
//         setRecord(res.data);
//       }
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = {
//         petId,
//         ownerId,
//         vaccinations: form.name
//           ? [
//               {
//                 name: form.name,
//                 dateAdministered: form.dateAdministered,
//                 nextDueDate: form.nextDueDate,
//                 notes: form.notes
//               }
//             ]
//           : [],
//         weight: form.weight || undefined,
//         notes: form.generalNotes || undefined
//       };
//       await axios.post("http://localhost:5000/api/pet-health", payload);
//       setForm({
//         name: "",
//         dateAdministered: "",
//         nextDueDate: "",
//         notes: "",
//         weight: "",
//         generalNotes: ""
//       });
//       fetchHealth();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="pet-health">
//       <h2>Pet Health & Vaccination Tracker</h2>

//       <form onSubmit={handleSubmit}>
//         <h3>Add Vaccination</h3>
//         <input
//           name="name"
//           placeholder="Vaccine Name"
//           value={form.name}
//           onChange={handleChange}
//         />
//         <input
//           name="dateAdministered"
//           type="date"
//           placeholder="Date Administered"
//           value={form.dateAdministered}
//           onChange={handleChange}
//         />
//         <input
//           name="nextDueDate"
//           type="date"
//           placeholder="Next Due Date"
//           value={form.nextDueDate}
//           onChange={handleChange}
//         />
//         <input name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} />

//         <h3>Add Weight / Notes</h3>
//         <input
//           name="weight"
//           type="number"
//           placeholder="Weight (kg)"
//           value={form.weight}
//           onChange={handleChange}
//         />
//         <textarea
//           name="generalNotes"
//           placeholder="General Notes"
//           value={form.generalNotes}
//           onChange={handleChange}
//         ></textarea>

//         <button type="submit">Save</button>
//       </form>

//       {record?.vaccinations?.length > 0 && (
//         <div>
//           <h3>Vaccinations</h3>
//           <ul>
//             {record.vaccinations.map((v, i) => (
//               <li key={i}>
//                 {v.name} | Administered:{" "}
//                 {new Date(v.dateAdministered).toLocaleDateString()} | Next Due:{" "}
//                 {v.nextDueDate ? new Date(v.nextDueDate).toLocaleDateString() : "-"} | Notes:{" "}
//                 {v.notes || "-"}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {record?.weightHistory?.length > 0 && (
//         <div>
//           <h3>Weight History</h3>
//           <ul>
//             {record.weightHistory.map((w, i) => (
//               <li key={i}>
//                 {new Date(w.date).toLocaleDateString()} — {w.weight} kg
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {record?.notes && (
//         <div>
//           <h3>Notes</h3>
//           <p>{record.notes}</p>
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./PetHealth.css";

// export default function PetHealth({ petId }) {
//   const ownerId = JSON.parse(localStorage.getItem("user"))?._id;
//   const [record, setRecord] = useState(null);
//   const [form, setForm] = useState({
//     name: "",
//     dateAdministered: "",
//     nextDueDate: "",
//     notes: "",
//     weight: "",
//     generalNotes: "",
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (petId) fetchHealth();
//     else setLoading(false); // new pet record form
//   }, [petId]);

//   const fetchHealth = async () => {
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/pet-health/${petId}/${ownerId}`
//       );
//       setRecord(res.data);
//     } catch (err) {
//       if (err.response && err.response.status === 404) setRecord(null);
//       else console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = {
//         petId,
//         ownerId,
//         vaccinations: form.name
//           ? [
//               {
//                 name: form.name,
//                 dateAdministered: form.dateAdministered,
//                 nextDueDate: form.nextDueDate,
//                 notes: form.notes,
//               },
//             ]
//           : [],
//         weight: form.weight || undefined,
//         notes: form.generalNotes || undefined,
//       };
//       await axios.post("http://localhost:5000/api/pet-health", payload);
//       setForm({
//         name: "",
//         dateAdministered: "",
//         nextDueDate: "",
//         notes: "",
//         weight: "",
//         generalNotes: "",
//       });
//       fetchHealth();
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   if (loading && petId) return <p>Loading...</p>;

//   return (
//     <div className="pet-health-card">
//       {/* Vaccination + Weight Form */}
//       <form onSubmit={handleSubmit}>
//         <h3>Add Vaccination</h3>
//         <input
//           name="name"
//           placeholder="Vaccine Name"
//           value={form.name}
//           onChange={handleChange}
//         />
//         <input
//           name="dateAdministered"
//           type="date"
//           placeholder="Date Administered"
//           value={form.dateAdministered}
//           onChange={handleChange}
//         />
//         <input
//           name="nextDueDate"
//           type="date"
//           placeholder="Next Due Date"
//           value={form.nextDueDate}
//           onChange={handleChange}
//         />
//         <input
//           name="notes"
//           placeholder="Notes"
//           value={form.notes}
//           onChange={handleChange}
//         />

//         <h3>Add Weight / Notes</h3>
//         <input
//           name="weight"
//           type="number"
//           placeholder="Weight (kg)"
//           value={form.weight}
//           onChange={handleChange}
//         />
//         <textarea
//           name="generalNotes"
//           placeholder="General Notes"
//           value={form.generalNotes}
//           onChange={handleChange}
//         ></textarea>

//         <button type="submit">Save</button>
//       </form>

//       {/* Display Vaccinations */}
//       {record?.vaccinations?.length > 0 && (
//         <div>
//           <h3>Vaccinations</h3>
//           <ul>
//             {record.vaccinations.map((v, i) => (
//               <li key={i}>
//                 {v.name} | Administered:{" "}
//                 {new Date(v.dateAdministered).toLocaleDateString()} | Next Due:{" "}
//                 {v.nextDueDate
//                   ? new Date(v.nextDueDate).toLocaleDateString()
//                   : "-"}{" "}
//                 | Notes: {v.notes || "-"}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Display Weight History */}
//       {record?.weightHistory?.length > 0 && (
//         <div>
//           <h3>Weight History</h3>
//           <ul>
//             {record.weightHistory.map((w, i) => (
//               <li key={i}>
//                 {new Date(w.date).toLocaleDateString()} — {w.weight} kg
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* General Notes */}
//       {record?.notes && (
//         <div>
//           <h3>Notes</h3>
//           <p>{record.notes}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState } from "react";
// import PetForm from "./PetForm";
// import { PlusCircle } from "lucide-react";

// export default function PetHealth() {
//   const [pets, setPets] = useState([]);
//   const [showForm, setShowForm] = useState(false);

//   const handleAddPet = (newPet) => {
//     setPets([...pets, newPet]);
//     setShowForm(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-10 px-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
//           🐾 Pet Health & Vaccination Tracker
//         </h1>

//         {/* Pet Cards */}
//         {pets.length === 0 ? (
//           <div className="text-center text-gray-500 text-lg bg-white shadow rounded-xl p-10">
//             No pets added yet.  
//             <p className="mt-2">Click below to add your first pet 🐶🐱</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {pets.map((pet, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-5"
//               >
//                 <h2 className="text-xl font-semibold text-purple-600">
//                   {pet.name}
//                 </h2>
//                 <p className="text-gray-600">
//                   <span className="font-medium">Type:</span> {pet.type}
//                 </p>
//                 <p className="text-gray-600">
//                   <span className="font-medium">Age:</span> {pet.age} years
//                 </p>

//                 <div className="mt-3">
//                   <h3 className="font-semibold text-gray-700">Vaccinations:</h3>
//                   {pet.vaccinations.length === 0 ? (
//                     <p className="text-sm text-gray-500">No records yet</p>
//                   ) : (
//                     <ul className="list-disc ml-5 text-sm text-gray-700">
//                       {pet.vaccinations.map((v, i) => (
//                         <li key={i}>{v}</li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Add Pet Button */}
//         <div className="flex justify-center mt-8">
//           <button
//             onClick={() => setShowForm(true)}
//             className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-full shadow-lg transition-all"
//           >
//             <PlusCircle size={20} />
//             Add Pet
//           </button>
//         </div>

//         {/* Modal Form */}
//         {showForm && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//             <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
//               <h2 className="text-xl font-bold text-purple-600 mb-4">
//                 Add New Pet
//               </h2>
//               <PetForm onSave={handleAddPet} onCancel={() => setShowForm(false)} />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import "./PetHealth.css";

// export default function PetHealth() {
//   const [petName, setPetName] = useState("");
//   const [petAge, setPetAge] = useState("");
//   const [petList, setPetList] = useState([]);

//   // ✅ Load pets from localStorage on mount
//   useEffect(() => {
//     const savedPets = JSON.parse(localStorage.getItem("pets")) || [];
//     setPetList(savedPets);
//   }, []);

//   // ✅ Save pets to localStorage whenever petList changes
//   useEffect(() => {
//     localStorage.setItem("pets", JSON.stringify(petList));
//   }, [petList]);

//   const handleAddPet = () => {
//     if (!petName || !petAge) return alert("Please fill all details");

//     const newPet = {
//       id: Date.now(),
//       name: petName,
//       age: petAge,
//     };

//     setPetList([...petList, newPet]);
//     setPetName("");
//     setPetAge("");
//   };

//   return (
//     <div className="pethealth-container">
//       <h2 className="pethealth-title">🐾 Pet Health Manager</h2>

//       <div className="pethealth-form">
//         <input
//           type="text"
//           placeholder="Enter Pet Name"
//           value={petName}
//           onChange={(e) => setPetName(e.target.value)}
//           className="pethealth-input"
//         />
//         <input
//           type="number"
//           placeholder="Enter Pet Age"
//           value={petAge}
//           onChange={(e) => setPetAge(e.target.value)}
//           className="pethealth-input"
//         />
//         <button onClick={handleAddPet} className="pethealth-btn">
//           ➕ Add Pet
//         </button>
//       </div>

//       <div className="pethealth-list">
//         {petList.length === 0 ? (
//           <p className="pethealth-empty">No pets added yet 🐶</p>
//         ) : (
//           petList.map((pet) => (
//             <div key={pet.id} className="pethealth-card">
//               <h3>{pet.name}</h3>
//               <p>Age: {pet.age} years</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import "./PetHealth.css";

export default function PetHealth() {
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [vaccinationName, setVaccinationName] = useState("");
  const [vaccinationDate, setVaccinationDate] = useState("");
  const [weight, setWeight] = useState("");
  const [note, setNote] = useState("");
  const [petList, setPetList] = useState([]);

  // ✅ Load pets from localStorage on mount
  useEffect(() => {
    const savedPets = JSON.parse(localStorage.getItem("pets")) || [];
    setPetList(savedPets);
  }, []);

  // ✅ Save pets to localStorage whenever petList changes
  useEffect(() => {
    localStorage.setItem("pets", JSON.stringify(petList));
  }, [petList]);

  const handleAddPet = () => {
    if (!petName || !petAge) return alert("Please fill Pet Name & Age");

    const newPet = {
      id: Date.now(),
      name: petName,
      age: petAge,
      vaccinations: vaccinationName
        ? [{ name: vaccinationName, dateAdministered: vaccinationDate }]
        : [],
      weightHistory: weight ? [{ date: new Date(), weight }] : [],
      notes: note || "",
    };

    setPetList([...petList, newPet]);

    // ✅ Reset form
    setPetName("");
    setPetAge("");
    setVaccinationName("");
    setVaccinationDate("");
    setWeight("");
    setNote("");
  };

  return (
    <div className="pethealth-container">
      <h2 className="pethealth-title">🐾 Pet Health Manager</h2>

      {/* 📝 Pet Form */}
      <div className="pethealth-form">
        <input
          type="text"
          placeholder="Enter Pet Name"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          className="pethealth-input"
        />
        <input
          type="number"
          placeholder="Enter Pet Age"
          value={petAge}
          onChange={(e) => setPetAge(e.target.value)}
          className="pethealth-input"
        />

        <input
          type="text"
          placeholder="Vaccination Name (optional)"
          value={vaccinationName}
          onChange={(e) => setVaccinationName(e.target.value)}
          className="pethealth-input"
        />
        <input
          type="date"
          value={vaccinationDate}
          onChange={(e) => setVaccinationDate(e.target.value)}
          className="pethealth-input"
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="pethealth-input"
        />

        <textarea
          placeholder="Notes (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="pethealth-textarea"
        />

        <button onClick={handleAddPet} className="pethealth-btn">
          ➕ Add Pet
        </button>
      </div>

      {/* 🐕 Pet List */}
      <div className="pethealth-list">
        {petList.length === 0 ? (
          <p className="pethealth-empty">No pets added yet 🐶</p>
        ) : (
          petList.map((pet) => (
            <div key={pet.id} className="pethealth-card">
              <h3>{pet.name}</h3>
              <p>Age: {pet.age} years</p>

              {pet.vaccinations.length > 0 && (
                <div className="pethealth-section">
                  <strong>Vaccinations:</strong>
                  <ul>
                    {pet.vaccinations.map((v, i) => (
                      <li key={i}>
                        {v.name} (Date: {new Date(v.dateAdministered).toLocaleDateString()})
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {pet.weightHistory.length > 0 && (
                <div className="pethealth-section">
                  <strong>Weight History:</strong>
                  <ul>
                    {pet.weightHistory.map((w, i) => (
                      <li key={i}>
                        {w.weight} kg on {new Date(w.date).toLocaleDateString()}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {pet.notes && (
                <div className="pethealth-section">
                  <strong>Notes:</strong>
                  <p>{pet.notes}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
