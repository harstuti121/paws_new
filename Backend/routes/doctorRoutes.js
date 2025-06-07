const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Import User Model

// ✅ Get all doctors (Filter users where role = "doctor")
router.get("/", async (req, res) => {
    try {
        const doctors = await User.find({ role: "doctor" }); // Filter only doctors
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ error: "Server error while fetching doctors" });
    }
});

module.exports = router;
