// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import './Book.css';

// export default function Book() {
//     const { doctorId } = useParams(); // ✅ Get doctor ID from URL
//     const [formData, setFormData] = useState({
//         petName: '',
//         petCategory: '',
//         breed: '',
//         age: '',
//         phone: '',
//         dateSlot: '',
//         timeSlot: '',
//         acceptedTerms: false,
//     });    
    
//     const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         const appointmentData = {
//             petName: formData.petName,
//             petCategory: formData.petCategory,
//             breed: formData.breed,
//             age: formData.age,
//             phone: formData.phone,
//             dateSlot: formData.dateSlot,
//             timeSlot: formData.timeSlot
//         };
    
//         try {
//             const response = await fetch("http://localhost:5000/api/appointments", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" }, // ✅ Important
//                 body: JSON.stringify(appointmentData)
//             });
    
//             const data = await response.json();
//             console.log(data);
    
//             if (response.status === 201) {
//                 alert("Appointment booked successfully!");
//             } else {
//                 alert(data.error);
//             }
//         } catch (error) {
//             console.error("Error:", error);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData((prevData) => {
//             const updatedData = {
//                 ...prevData,
//                 [name]: type === "checkbox" ? checked : value,
//             };
//             console.log("Updated Form Data:", updatedData); // Debugging
//             return updatedData;
//         });
//     };
    
//     return (
//         <div className="bookContainer max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mb-4">
//             <h2 className="text-2xl font-bold text-center mb-6">📅 Book an Appointment</h2>

//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <input type="hidden" name="doctorId" value={formData.doctorId} />

//                 {/* Pet Name */}
//                 <div className="flex flex-col">
//                     <label className="text-sm font-semibold">🐾 Pet Name *</label>
//                     <input type="text" name="petName" value={formData.petName} onChange={handleChange} required className="border p-2 rounded" />
//                 </div>

//                 {/* Pet Category */}
//                 <div className="flex flex-col">
//                     <label className="text-sm font-semibold">🐕 Pet Category *</label>
//                     {/* <select name="species" value={formData.species} onChange={handleChange} required className="border p-2 rounded">
//                         <option value="">Select Category</option>
//                         <option value="Dog">Dog</option>
//                         <option value="Cat">Cat</option>
//                         <option value="Bird">Bird</option>
//                         <option value="Other">Other</option>
//                     </select> */}
//                     {/* <select name="petCategory" value={formData.petCategory} onChange={handleChange} required className="border p-2 rounded"/> */}
//                     <select 
//                         name="petCategory" 
//                         value={formData.petCategory} 
//                         onChange={handleChange} 
//                         required 
//                         className="border p-2 rounded"
//                         >
//                         <option value="">Select Pet Category</option>
//                         <option value="dog">Dog</option>
//                         <option value="cat">Cat</option>
//                         <option value="bird">Bird</option>
//                         <option value="fish">Fish</option>
//                         <option value="rabbit">Rabbit</option>
//                         <option value="other">Other</option>
//                     </select>
//                 </div>

//                 {/* Breed */}
//                 <div className="flex flex-col">
//                     <label className="text-sm font-semibold">🐶 Breed *</label>
//                     <input type="text" name="breed" value={formData.breed} onChange={handleChange} required className="border p-2 rounded" />
//                 </div>

//                 {/* Age */}
//                 <div className="flex flex-col">
//                     <label className="text-sm font-semibold">📅 Age *</label>
//                     <input type="number" name="age" value={formData.age} onChange={handleChange} required className="border p-2 rounded" />
//                 </div>

//                 {/* Phone Number */}
//                 <div className="flex flex-col">
//                     <label className="text-sm font-semibold">📞 Phone *</label>
//                     <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="border p-2 rounded" />
//                 </div>

//                 {/* Date Slot */}
//                 <div className="flex flex-col">
//                     <label className="text-sm font-semibold">📆 Date Slot *</label>
//                     <input type="date" name="dateSlot" value={formData.dateSlot} onChange={handleChange} required className="border p-2 rounded" />
//                 </div>

//                 {/* Time Slot */}
//                 <div className="flex flex-col">
//                     <label className="text-sm font-semibold">⏰ Time Slot *</label>
//                     <input type="time" name="timeSlot" value={formData.timeSlot} onChange={handleChange} required className="border p-2 rounded" />
//                 </div>

//                 {/* Terms Checkbox */}
//                 <div className="flex items-center">
//                     <input type="checkbox" name="acceptedTerms" checked={formData.acceptedTerms} onChange={handleChange} required />
//                     <label className="ml-2">I accept the terms and conditions</label>
//                 </div>

//                 {/* Submit Button */}
//                 <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
//                     ✅ Book Appointment
//                 </button>
//             </form>
//         </div>
//     );
// }

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './Book.css';

export default function Book() {
    const { doctorId } = useParams(); // Get doctor ID from URL
    const [formData, setFormData] = useState({
        petName: '',
        petCategory: '',
        breed: '',
        age: '',
        phone: '',
        dateSlot: '',
        timeSlot: '',
        acceptedTerms: false,
    });
    const [step, setStep] = useState(1); // Multi-step form state

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    return (
        <div className="bookContainer">
            <h2 className="heading">Book an Appointment</h2>
            <div className="steps">
                <button onClick={prevStep} disabled={step === 1} className="stepBtn">❮ Back</button>
                <span>Step {step} of 3</span>
                <button onClick={nextStep} disabled={step === 3} className="stepBtn">Next ❯</button>
            </div>
            <form onSubmit={handleSubmit} className="form">
                {step === 1 && (
                    <div className="step1">
                        <div className="inputGroup">
                            <label>🐾 Pet Name</label>
                            <input type="text" name="petName" value={formData.petName} onChange={handleChange} required />
                        </div>
                        <div className="inputGroup">
                            <label>🐕 Pet Category</label>
                            <div className="petCategorySelect">
                                <select name="petCategory" value={formData.petCategory} onChange={handleChange} required>
                                    <option value="">Select Category</option>
                                    <option value="dog">Dog</option>
                                    <option value="cat">Cat</option>
                                    <option value="bird">Bird</option>
                                    <option value="fish">Fish</option>
                                    <option value="rabbit">Rabbit</option>
                                    <option value="other">Other</option>
                                </select>
                                <div className="avatar">
                                    {formData.petCategory && <img src={`images/${formData.petCategory}.png`} alt="pet avatar" />}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="step2">
                        <div className="inputGroup">
                            <label>🐶 Breed</label>
                            <input type="text" name="breed" value={formData.breed} onChange={handleChange} required />
                        </div>
                        <div className="inputGroup">
                            <label>📅 Age</label>
                            <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                        </div>
                        <div className="inputGroup">
                            <label>📞 Phone</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="step3">
                        <div className="inputGroup">
                            <label>📆 Date Slot</label>
                            <input type="date" name="dateSlot" value={formData.dateSlot} onChange={handleChange} required />
                        </div>
                        <div className="inputGroup">
                            <label>⏰ Time Slot</label>
                            <input type="time" name="timeSlot" value={formData.timeSlot} onChange={handleChange} required />
                        </div>
                        <div className="inputGroup">
                            <input type="checkbox" name="acceptedTerms" checked={formData.acceptedTerms} onChange={handleChange} required />
                            <label>I accept the terms and conditions</label>
                        </div>
                        <button type="submit">✅ Book Appointment</button>
                    </div>
                )}
            </form>
        </div>
    );
}
