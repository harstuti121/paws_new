// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./Signup.css"; // Import CSS

// const Signup = () => {
//     const [step, setStep] = useState(1);
//     const [role, setRole] = useState("");
//     const navigate = useNavigate();

//     const [user, setUser] = useState({
//         name: "",
//         email: "",
//         password: "",
//         specialization: "",
//         experience: "",
//         clinic_address: "",
//         contact: "",
//         pets: []
//     });

//     const [pet, setPet] = useState({
//         name: "",
//         type: "",
//         breed: "",
//         age: "",
//         medical_history: ""
//     });

//     const handleChange = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value });
//     };

//     const handlePetChange = (e) => {
//         setPet({ ...pet, [e.target.name]: e.target.value });
//     };

//     const addPet = () => {
//         if (!pet.name || !pet.type || !pet.age) {
//             alert("❌ Please fill pet name, type, and age!");
//             return;
//         }
//         setUser({ ...user, pets: [...user.pets, pet] });
//         setPet({ name: "", type: "", breed: "", age: "", medical_history: "" });
//     };

//     const selectRole = (selectedRole) => {
//         setRole(selectedRole);
//         setUser({ ...user, role: selectedRole });
//         setStep(2);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post("http://localhost:5000/api/users/create-user", user);
//             alert("✅ Signup successful!");
//             navigate("/signin");
//         } catch (error) {
//             alert("❌ Signup failed! " + error.response?.data?.message);
//         }
//     };

//     return (
//         <div className="signup-container">
//             <div className="signup-box">
//                 <h2 className="signup-title">Sign Up</h2>

//                 {step === 1 && (
//                     <div className="text-center">
//                         <h3 className="text-lg font-semibold text-gray-700 mt-4">Are you a:</h3>
//                         <div className="role-buttons">
//                             <button className="role-btn vet" onClick={() => selectRole("doctor")}>
//                                 👨‍⚕️ Veterinarian Doctor
//                             </button>
//                             <button className="role-btn pet-owner" onClick={() => selectRole("pet_owner")}>
//                                 🐶 Pet Owner
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {step === 2 && (
//                     <form onSubmit={handleSubmit} className="signup-form">
//                         <div className="mb-3">
//                             <label>Name</label>
//                             <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
//                         </div>

//                         <div className="mb-3">
//                             <label>Email</label>
//                             <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
//                         </div>

//                         <div className="mb-3">
//                             <label>Password</label>
//                             <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//                         </div>

//                         {role === "doctor" && (
//                             <div className="pet-details">
//                                 <h3 className="text-lg font-semibold text-gray-700">Doctor Details</h3>
//                                 <input type="text" name="specialization" placeholder="Specialization" onChange={handleChange} required />
//                                 <input type="number" name="experience" placeholder="Experience (Years)" onChange={handleChange} required />
//                                 <input type="text" name="clinic_address" placeholder="Clinic Address" onChange={handleChange} required />
//                                 <input type="text" name="contact" placeholder="Contact" onChange={handleChange} required />
//                             </div>
//                         )}

//                         {role === "pet_owner" && (
//                             <div className="pet-details">
//                                 <h3 className="text-lg font-semibold text-gray-700">Add Pet Details</h3>
//                                 <input type="text" name="name" placeholder="Pet Name" onChange={handlePetChange} />
//                                 <input type="text" name="type" placeholder="Type (Dog, Cat, etc.)" onChange={handlePetChange} />
//                                 <input type="text" name="breed" placeholder="Breed" onChange={handlePetChange} />
//                                 <input type="number" name="age" placeholder="Age" onChange={handlePetChange} />
//                                 <input type="text" name="medical_history" placeholder="Medical History" onChange={handlePetChange} />
//                                 <button type="button" className="signup-btn" onClick={addPet}>➕ Add Pet</button>
//                             </div>
//                         )}

//                         <button type="submit" className="signup-btn">Signup</button>
//                     </form>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Signup;
 
//2
// import React, { useState } from 'react';
// import './Signup.css';

// const Signup = () => {
//   const [role, setRole] = useState('');
//   // const [formData, setFormData] = useState({
//   //   name: '',
//   //   email: '',
//   //   password: '',
//   //   contact: '',
//   //   specialization: '',
//   //   degree: '',
//   //   experience: '',
//   //   consultationFees: '',
//   //   address: '',
//   //   petName: '',
//   //   petType: '',
//   //   petAge: '',
//   // });

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     contact: '',
//     specialization: '',
//     degree: '',
//     experience: '',
//     consultationFees: '',
//     address: '',
//     role: '',
//     petName: '',
//     petType: '',
//     petBreed: '',   // ➡️ new field added
//     petAge: '',
//   });  
  
//   const [pets, setPets] = useState([]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   // const handleAddPet = () => {
//   //   if (formData.petName && formData.petType && formData.petAge) {
//   //     setPets([...pets, {
//   //       name: formData.petName,
//   //       type: formData.petType,
//   //       age: formData.petAge,
//   //     }]);
//   //     setFormData(prev => ({
//   //       ...prev,
//   //       petName: '',
//   //       petType: '',
//   //       petAge: '',
//   //     }));
//   //   }
//   // };

//   const handleAddPet = () => {
//     if (formData.petName && formData.petType && formData.petBreed && formData.petAge) {
//       const newPet = {
//         name: formData.petName,
//         type: formData.petType,
//         breed: formData.petBreed,
//         age: parseInt(formData.petAge, 10),
//       };
//       setPets([...pets, newPet]);
//       // Clear only pet fields after adding
//       setFormData({
//         ...formData,
//         petName: '',
//         petType: '',
//         petBreed: '',
//         petAge: '',
//       });
//     }
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!role) {
//       alert('Please select a role');
//       return;
//     }

//     const finalData = { role, ...formData, pets };
//     console.log('Submitted data:', finalData);
//     // You can POST this data to your backend
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-box">
//         <h2 className="signup-title">Signup</h2>

//         {/* Role Selection */}
//         <div className="role-buttons">
//           <button className="role-btn vet" onClick={() => setRole('vet')}>
//             Doctor (Vet)
//           </button>
//           <button className="role-btn pet-owner" onClick={() => setRole('petOwner')}>
//             Pet Owner
//           </button>
//         </div>

//         {/* Form */}
//         <form className="signup-form" onSubmit={handleSubmit}>
//           {/* Common Fields */}
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             placeholder="Enter your name"
//             required
//           />

//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Enter your email"
//             required
//           />

//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             placeholder="Enter password"
//             required
//           />

//           <label>Contact Number</label>
//           <input
//             type="tel"
//             name="contact"
//             value={formData.contact}
//             onChange={handleInputChange}
//             placeholder="Enter contact number"
//             required
//           />

//           {/* Vet Specific Fields */}
//           {role === 'vet' && (
//             <>
//               <label>Specialization</label>
//               <input
//                 type="text"
//                 name="specialization"
//                 value={formData.specialization}
//                 onChange={handleInputChange}
//                 placeholder="e.g. Surgery, Dermatology"
//                 required
//               />

//               <label>Degree</label>
//               <input
//                 type="text"
//                 name="degree"
//                 value={formData.degree}
//                 onChange={handleInputChange}
//                 placeholder="e.g. B.V.Sc, M.V.Sc"
//                 required
//               />

//               <label>Years of Experience</label>
//               <input
//                 type="number"
//                 name="experience"
//                 value={formData.experience}
//                 onChange={handleInputChange}
//                 placeholder="e.g. 5"
//                 required
//               />

//               <label>Consultation Fees (₹)</label>
//               <input
//                 type="number"
//                 name="consultationFees"
//                 value={formData.consultationFees}
//                 onChange={handleInputChange}
//                 placeholder="Enter fees"
//                 required
//               />

//               <label>Clinic Address</label>
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 placeholder="Enter clinic address"
//                 required
//               />
//             </>
//           )}

//           {/* Pet Owner Specific Fields */}
//           {role === 'pet_owner' && (
//           <div className="pet-details">
//             <h4 className="text-center">Add Pet Details</h4>

//             <label>Pet Name</label>
//             <input
//               type="text"
//               name="petName"
//               value={formData.petName}
//               onChange={handleInputChange}
//               placeholder="Enter pet name"
//             />

//             <label>Pet Type</label>
//             <input
//               type="text"
//               name="petType"
//               value={formData.petType}
//               onChange={handleInputChange}
//               placeholder="e.g. Dog, Cat"
//             />

//             <label>Pet Breed</label>
//             <input
//               type="text"
//               name="petBreed"
//               value={formData.petBreed}
//               onChange={handleInputChange}
//               placeholder="Enter pet breed"
//             />

//             <label>Pet Age (Years)</label>
//             <input
//               type="number"
//               name="petAge"
//               value={formData.petAge}
//               onChange={handleInputChange}
//               placeholder="Enter pet age"
//             />

//             <button type="button" className="signup-btn" onClick={handleAddPet}>
//               Add Pet
//             </button>

//             {pets.length > 0 && (
//               <div className="added-pets">
//                 <h5>Added Pets:</h5>
//                 <ul>
//                   {pets.map((pet, index) => (
//                     <li key={index}>
//                       {pet.name} ({pet.type}, {pet.breed}, {pet.age} years)
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         )}


//           {/* Submit */}
//           <button type="submit" className="signup-btn">
//             Signup
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const ROLE_VET = 'vet';
  const ROLE_PET_OWNER = 'pet_owner';

  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contact: '',
    specialization: '',
    degree: '',
    experience: '',
    consultationFees: '',
    address: '',
    petName: '',
    petType: '',
    petBreed: '',
    petAge: '',
  });
  
  const [pets, setPets] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddPet = () => {
    if (formData.petName && formData.petType && formData.petBreed && formData.petAge) {
      const newPet = {
        name: formData.petName,
        type: formData.petType,
        breed: formData.petBreed,
        age: parseInt(formData.petAge, 10),
      };
      setPets([...pets, newPet]);
      // Clear only pet fields after adding
      setFormData({
        ...formData,
        petName: '',
        petType: '',
        petBreed: '',
        petAge: '',
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!role) {
    //   alert('Please select a role');
    //   return;
    // }
      // Validation to check if all required fields are filled
    if (!formData.name || !formData.email || !formData.password || !role) {
      alert('❌ Name, Email, Password, and Role are required!');
      return; // Prevent form submission
    }
    const finalData = { role, ...formData, pets };
    console.log('Submitted data:', finalData);
    // You can POST this data to your backend
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Signup</h2>

        {/* Role Selection */}
        <div className="role-buttons">
          <button className="role-btn vet" onClick={() => setRole(ROLE_VET)}>
            Doctor (Vet)
          </button>
          <button className="role-btn pet-owner" onClick={() => setRole(ROLE_PET_OWNER)}>
            Pet Owner
          </button>
        </div>

        {/* Form */}
        <form className="signup-form" onSubmit={handleSubmit}>
          {/* Common Fields */}
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter password"
            required
          />

          <label>Contact Number</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            placeholder="Enter contact number"
            required
          />

          {/* Vet Specific Fields */}
          {role === ROLE_VET && (
            <>
              <label>Specialization</label>
              <input
                type="text"
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                placeholder="e.g. Surgery, Dermatology"
                required
              />

              <label>Degree</label>
              <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleInputChange}
                placeholder="e.g. B.V.Sc, M.V.Sc"
                required
              />

              <label>Years of Experience</label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="e.g. 5"
                required
              />

              <label>Consultation Fees (₹)</label>
              <input
                type="number"
                name="consultationFees"
                value={formData.consultationFees}
                onChange={handleInputChange}
                placeholder="Enter fees"
                required
              />

              <label>Clinic Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter clinic address"
                required
              />
            </>
          )}

          {/* Pet Owner Specific Fields */}
          {role === ROLE_PET_OWNER && (
            <div className="pet-details">
              <h4 className="text-center">Add Pet Details</h4>

              <label>Pet Name</label>
              <input
                type="text"
                name="petName"
                value={formData.petName}
                onChange={handleInputChange}
                placeholder="Enter pet name"
              />

              <label>Pet Type</label>
              <input
                type="text"
                name="petType"
                value={formData.petType}
                onChange={handleInputChange}
                placeholder="e.g. Dog, Cat"
              />

              <label>Pet Breed</label>
              <input
                type="text"
                name="petBreed"
                value={formData.petBreed}
                onChange={handleInputChange}
                placeholder="Enter pet breed"
              />

              <label>Pet Age (Years)</label>
              <input
                type="number"
                name="petAge"
                value={formData.petAge}
                onChange={handleInputChange}
                placeholder="Enter pet age"
              />

              <button type="button" className="signup-btn" onClick={handleAddPet}>
                Add Pet
              </button>

              {pets.length > 0 && (
                <div className="added-pets">
                  <h5>Added Pets:</h5>
                  <ul>
                    {pets.map((pet, index) => (
                      <li key={index}>
                        {pet.name} ({pet.type}, {pet.breed}, {pet.age} years)
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <label>Address</label>
              <input
                type="text"
                name="petOwnerAddress"
                value={formData.petOwnerAddress}
                onChange={handleInputChange}
                placeholder="Enter your address"
                required
              />

            </div>
          )}

          {/* Submit */}
          <button type="submit" className="signup-btn">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
