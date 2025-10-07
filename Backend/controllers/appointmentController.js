// const Appointment = require("../models/Appointment");
// const ChatRoom = require("../models/ChatRoom"); // create this model if you don’t have it

// exports.acceptAppointment = async (req, res) => {
//   try {
//     const { appointmentId } = req.params;
//     const { doctorId, notes } = req.body;

//     // Step 1: Update appointment
//     const appointment = await Appointment.findByIdAndUpdate(
//       appointmentId,
//       { status: "Accepted", doctorId, notes },
//       { new: true }
//     ).populate("ownerId", "name email");

//     if (!appointment) {
//       return res.status(404).json({ message: "Appointment not found" });
//     }

//     // Step 2: Create or find chat room
//     let chatRoom = await ChatRoom.findOne({
//       participants: { $all: [doctorId, appointment.ownerId._id] }
//     });

//     if (!chatRoom) {
//       chatRoom = await ChatRoom.create({
//         participants: [doctorId, appointment.ownerId._id]
//       });
//     }

//     // Step 3: Send back appointment + chatRoom ID
//     res.json({
//       success: true,
//       appointment,
//       chatRoom
//     });
//   } catch (error) {
//     console.error("Error accepting appointment:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

const Appointment = require("../models/Appointment");
const User = require("../models/User");

// ✅ 1. Create new appointment (by Pet Owner)
// exports.createAppointment = async (req, res) => {
//   try {
//     const { petDetails, appointmentDate, dateSlot, timeSlot, notes } = req.body;
//     const ownerId = req.user.id; // ✅ from logged-in user

//     const owner = await User.findById(ownerId);
//     if (!owner || owner.role !== "pet_owner") {
//       return res.status(400).json({ message: "Only pet owners can book appointments" });
//     }

//     const newAppointment = new Appointment({
//       petDetails,
//       ownerId,
//       ownerContact: owner.contact || "",
//       ownerEmail: owner.email,
//       appointmentDate,
//       dateSlot,
//       timeSlot,
//       notes,
//     });

//     await newAppointment.save();
//     res.status(201).json(newAppointment);
//   } catch (err) {
//     res.status(500).json({ message: "Error creating appointment", error: err.message });
//   }
// };

// // ✅ 2. Get all appointments for a Doctor
// exports.getDoctorAppointments = async (req, res) => {
//   try {
//     const doctorId = req.user.id;

//     const appointments = await Appointment.find({ doctorId })
//       .populate("ownerId", "name email contact address");

//     res.json(appointments);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching doctor appointments", error: err.message });
//   }
// };

exports.createAppointment = async (req, res) => {
  try {
    const { petDetails, appointmentDate, dateSlot, timeSlot, notes } = req.body;
    const ownerId = req.user.id; // ✅ from logged-in user

    const owner = await User.findById(ownerId);
    if (!owner || owner.role !== "pet_owner") {
      return res.status(400).json({ message: "Only pet owners can book appointments" });
    }

    const newAppointment = new Appointment({
      petDetails,
      ownerId,
      ownerContact: owner.contact || "",
      ownerEmail: owner.email,
      appointmentDate,
      dateSlot,
      timeSlot,
      notes,
    });

    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(500).json({ message: "Error creating appointment", error: err.message });
  }
};

// ✅ 3. Get all appointments for a Pet Owner
exports.getOwnerAppointments = async (req, res) => {
  try {
    const ownerId = req.user.id;

    const appointments = await Appointment.find({ ownerId })
      .populate("doctorId", "name email contact specialization degree experience");

    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: "Error fetching owner appointments", error: err.message });
  }
};

// ✅ 4. Doctor Accepts / Rejects appointment
exports.updateAppointmentStatus = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const { status } = req.body;
    const doctorId = req.user.id;

    if (!["Accepted", "Rejected", "Completed"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const appointment = await Appointment.findById(appointmentId);

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    // ✅ assign doctor only if accepting
    if (status === "Accepted") {
      appointment.doctorId = doctorId;
    }

    appointment.status = status;
    await appointment.save();

    res.json({ message: `Appointment ${status}`, appointment });
  } catch (err) {
    res.status(500).json({ message: "Error updating appointment status", error: err.message });
  }
};
