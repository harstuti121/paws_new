// // const express = require('express');
// // const router = express.Router();
// // const Appointment = require('../models/Appointment');

// // // router.post("/", async (req, res) => {
// // //     console.log("Received Data:", req.body);
  
// // //     const { petName, email, date, time, service } = req.body;
  
// // //     // Validation: Sab fields honi chahiye
// // //     if (!petName || !email || !dateSlot || !timeSlot || !service) {
// // //       return res.status(400).json({ error: "All fields are required" });
// // //     }
  
// // //     try {
// // //       const newAppointment = new Appointment({ name, email, date, time, service });
// // //       await newAppointment.save();
// // //       res.status(201).json({ message: "Appointment booked successfully!" });
// // //     } catch (error) {
// // //       console.error("Error saving appointment:", error);
// // //       res.status(500).json({ error: "Internal Server Error" });
// // //     }
// // //   });
  
// // router.post("/", async (req, res) => {
// //     console.log("Received Data:", req.body);
  
// //     const { petName, email, dateSlot, timeSlot, service } = req.body;
  
// //     // Validation: Sab fields honi chahiye
// //     if (!petName || !email || !dateSlot || !timeSlot || !service) {
// //         return res.status(400).json({ error: "All fields are required" });
// //     }
  
// //     try {
// //         const newAppointment = new Appointment({ 
// //             petName,  // ✅ Corrected
// //             email, 
// //             date: dateSlot,  // ✅ Assigning correct variables
// //             time: timeSlot, 
// //             service 
// //         });

// //         await newAppointment.save();
// //         res.status(201).json({ message: "Appointment booked successfully!" });
// //     } catch (error) {
// //         console.error("Error saving appointment:", error);
// //         res.status(500).json({ error: "Internal Server Error" });
// //     }
// // });

// // module.exports = router;


// const express = require("express");
// const router = express.Router();
// const Appointment = require("../models/Appointment");

// router.post("/", async (req, res) => {
//     console.log("Received Data:", req.body);

//     const { petName, species, breed, age, ownerName, phone, email, dateSlot, timeSlot, doctorId } = req.body;

//     if (!petName || !species || !breed || !age || !ownerName || !phone || !email || !dateSlot || !timeSlot || !doctorId) {  
//     return res.status(400).json({ error: "All fields are required" });
//     }

//     try {
//         const newAppointment = new Appointment({
//             petOwnerId: req.user.id,  // 🔹 Get logged-in user ID
//             doctorId,
//             petDetails: {
//                 name: petName,
//                 species,
//                 breed,
//                 age,
//                 weight: req.body.weight || 0
//             },
//             ownerContact: phone,
//             dateSlot,
//             timeSlot
//         });        

//         await newAppointment.save();
//         res.status(201).json({ message: "Appointment booked successfully!" });

//     } catch (error) {
//         console.error("Error saving appointment:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// 📌 Create an Appointment (POST Request)
// router.post("/", async (req, res) => {
//     console.log("Received Data:", req.body);

//     const { petName, petCategory, breed, age, phone, dateSlot, timeSlot } = req.body;

//     // 🚨 Validation: Ensure all required fields are present
//     if (!petName || !petCategory || !breed || !age || !phone || !dateSlot || !timeSlot) {
//         return res.status(400).json({ error: "All fields are required" });
//     }

//     try {
//         // ✅ Creating new appointment object
//         const newAppointment = new Appointment({
//             petDetails: {
//                 name: petName,
//                 species: petCategory, // 🐕 Category (Dog, Cat, etc.)
//                 breed: breed,
//                 age: age,
//             },
//             ownerContact: phone,  // 📞 Owner's phone number
//             dateSlot: dateSlot,   // 📆 Date of appointment
//             timeSlot: timeSlot,   // ⏰ Time of appointment
//             status: "Pending"     // Default status: Pending
//         });

//         // 🛠️ Save to database
//         await newAppointment.save();

//         res.status(201).json({ message: "Appointment booked successfully!" });

//     } catch (error) {
//         console.error("Error saving appointment:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

router.post("/", async (req, res) => {
    console.log("Received Data:", req.body); // 🔍 Debugging log

    const { petName, petCategory, breed, age, phone, dateSlot, timeSlot } = req.body;

    // Log each field separately
    console.log("petName:", petName);
    console.log("petCategory:", petCategory);
    console.log("breed:", breed);
    console.log("age:", age);
    console.log("phone:", phone);
    console.log("dateSlot:", dateSlot);
    console.log("timeSlot:", timeSlot);

    if (!petName || !petCategory || !breed || !age || !phone || !dateSlot || !timeSlot) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const newAppointment = new Appointment({
            petDetails: {
                name: petName,
                species: petCategory,
                breed: breed,
                age: age,
            },
            ownerContact: phone,
            dateSlot: dateSlot,
            timeSlot: timeSlot,
            status: "Pending"
        });

        await newAppointment.save();
        res.status(201).json({ message: "Appointment booked successfully!" });

    } catch (error) {
        console.error("Error saving appointment:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
