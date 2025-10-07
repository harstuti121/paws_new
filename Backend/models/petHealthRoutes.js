// // Backend/routes/petHealthRoutes.js
// const express = require("express");
// const router = express.Router();
// const PetHealth = require("../models/PetHealth");

// // CREATE or ADD Vaccination
// router.post("/", async (req, res) => {
//   try {
//     const { petId, ownerId, vaccination } = req.body;

//     let record = await PetHealth.findOne({ petId, ownerId });
//     if (!record) {
//       record = await PetHealth.create({ petId, ownerId, vaccinations: [vaccination] });
//     } else {
//       record.vaccinations.push(vaccination);
//       await record.save();
//     }

//     res.status(201).json({ message: "Vaccination added", record });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// // GET all records for a pet
// router.get("/:petId/:ownerId", async (req, res) => {
//   try {
//     const { petId, ownerId } = req.params;
//     const record = await PetHealth.findOne({ petId, ownerId });
//     res.json(record || { vaccinations: [], weightHistory: [] });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // OPTIONAL: Add weight history
// router.put("/:petId/:ownerId/weight", async (req, res) => {
//   try {
//     const { petId, ownerId } = req.params;
//     const { weight } = req.body;
//     const record = await PetHealth.findOne({ petId, ownerId });
//     if (!record) return res.status(404).json({ error: "Record not found" });

//     record.weightHistory.push({ weight });
//     await record.save();
//     res.json({ message: "Weight updated", record });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// module.exports = router;

// Backend/routes/petHealthRoutes.js
const express = require("express");
const router = express.Router();
const PetHealth = require("../models/PetHealth");

// CREATE or UPDATE pet health record
router.post("/", async (req, res) => {
  try {
    const { petId, ownerId, vaccinations, weight, notes } = req.body;

    // Find existing record
    let record = await PetHealth.findOne({ petId, ownerId });

    if (!record) {
      // Create new record
      record = await PetHealth.create({
        petId,
        ownerId,
        vaccinations,
        weightHistory: weight ? [{ weight }] : [],
        notes,
      });
    } else {
      // Update existing record
      if (vaccinations) record.vaccinations.push(...vaccinations);
      if (weight) record.weightHistory.push({ weight });
      if (notes) record.notes = notes;
      await record.save();
    }

    res.status(200).json({ message: "Pet health updated", record });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/pets/health/:ownerId", async (req, res) => {
  const { ownerId } = req.params;
  const records = await PetHealth.find({ ownerId });
  res.json(records);
});

// Get one pet health record by petId & ownerId
router.get("/pet-health/:petId/:ownerId", async (req, res) => {
  const { petId, ownerId } = req.params;
  const record = await PetHealth.findOne({ petId, ownerId });
  if (!record) return res.status(404).json({ message: "Record not found" });
  res.json(record);
});

// Create a new pet health record
router.post("/pet-health", async (req, res) => {
  const record = new PetHealth(req.body);
  await record.save();
  res.json(record);
});
// GET pet health by petId
router.get("/:petId/:ownerId", async (req, res) => {
  try {
    const { petId, ownerId } = req.params;
    const record = await PetHealth.findOne({ petId, ownerId });
    if (!record) return res.status(404).json({ error: "No health record found" });
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
