const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();
dotenv.config(); // Load environment variables
app.use(express.json()); // To parse JSON data
const User=require('./models/User');

// Middleware

app.use(express.urlencoded({ extended: true })); // To handle form-urlencoded data
app.use(cors());

// ✅ Use MONGO_URI from .env file
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB Connected Successfully!");
  console.log("🔍 Connected Database Name:", mongoose.connection.db.databaseName); // Correct way to log DB name
})
.catch((err) => console.error("❌ MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;

// ✅ Routes
// app.post('/api/users/create-user', async (req, res) => {
//   try {
//     console.log(req.body); // Log the data to the console to see what you're receiving

//     const user = new User(req.body); // Create a new user using the data sent
//     await user.save(); // Save the user in the database
//     res.status(201).json({ message: 'User created successfully', user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error', error });
//   }
// });


const appointmentRoutes = require("./routes/appointmentRoutes");
app.use('/api/appointments', appointmentRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const doctorRoutes = require("./routes/doctorRoutes");
app.use("/api/doctors", doctorRoutes);

app.get("/api/appointments", async (req, res) => {
  try {
      const appointments = await Appointment.find(); // Fetch from database
      res.json(appointments);
  } catch (error) {
      res.status(500).json({ error: "Server error" });
  }
});
const Appointment = require("./models/Appointment"); // ✅ Import model
app.get("/api/appointments", async (req, res) => {
  try {
      const appointments = await Appointment.find(); // ✅ Correct model reference
      res.json(appointments);
  } catch (error) {
      console.error("Error fetching appointments:", error); // ✅ Log actual error
      res.status(500).json({ error: "Server error", details: error.message });
  }
});

const paymentRoutes = require("./routes/paymentRoutes");
app.use("/api/paymentRoutes", paymentRoutes);

const articlesRoutes = require('./routes/articles');
app.use('/api', articlesRoutes);

app.get('/api/articles', (req, res) => {
  res.json(articles);
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
