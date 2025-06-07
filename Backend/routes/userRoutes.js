// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const authMiddleware = require("../middleware/authMiddleware");

// // 🟢 Get Logged-in User Details
// router.get("/user", authMiddleware, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password"); // Exclude password
//     if (!user) return res.status(404).json({ message: "User not found" });
    
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// router.post("/create-user", async (req, res) => {
//     try {
//         const { name, email, password, role, specialization, experience, clinic_address, contact, pets, address } = req.body;

//         // 🔍 Check if user already exists
//         let existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: "❌ User already exists with this email!" });
//         }

//         // 🛑 Validate required fields
//         if (!name || !email || !password || !role) {
//             return res.status(400).json({ message: "❌ Name, Email, Password, and Role are required!" });
//         }

//         // 🔑 Hash the password before saving
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // ✅ Create new user object
//         const newUser = new User({
//             name,
//             email,
//             password: hashedPassword,
//             role,
//             specialization: role === "doctor" ? specialization : undefined,
//             experience: role === "doctor" ? experience : undefined,
//             clinic_address: role === "doctor" ? clinic_address : undefined,
//             contact: role === "doctor" ? contact : undefined,
//             pets: role === "pet_owner" ? pets || [] : undefined,  // Only store pets for pet owners
//             address: role === "pet_owner" ? address : undefined   // Only store address for pet owners
//         });

//         // 🔥 Save user in database
//         await newUser.save();

//         // ✅ Response without password for security
//         res.status(201).json({
//             message: "✅ User created successfully!",
//             user: {
//                 _id: newUser._id,
//                 name: newUser.name,
//                 email: newUser.email,
//                 role: newUser.role,
//                 specialization: newUser.specialization,
//                 experience: newUser.experience,
//                 clinic_address: newUser.clinic_address,
//                 contact: newUser.contact,
//                 pets: newUser.pets,
//                 address: newUser.address
//             }
//         });

//     } catch (error) {
//         console.error("❌ Error creating user:", error);
//         res.status(500).json({ message: "❌ Server error", error });
//     }
// });

// router.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(400).json({ message: "Invalid credentials!" });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: "Invalid credentials!" });
//         }

//         // ✅ Generate JWT token
//         const token = jwt.sign(
//             { id: user._id, role: user.role },
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" }
//         );

//         // ✅ Send user details inside a "user" object
//         res.json({
//             token,
//             user: {
//                 id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 role: user.role,  
//             }
//         });
//     } catch (error) {
//         console.error("❌ Server error:", error);
//         res.status(500).json({ message: "Server error" });
//     }
// });

// router.get("/doctors", async (req, res) => {
//     try {
//         const doctors = await User.find({ role: "doctor" }); // Sirf doctors ka data fetch karega
//         res.json(doctors);
//     } catch (error) {
//         console.error("❌ Error fetching doctors:", error);
//         res.status(500).json({ message: "Server error" });
//     }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authMiddleware = require("../middleware/authMiddleware");

// Utility function to validate email format
const emailValidator = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

// 🟢 Get Logged-in User Details
router.get("/user", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // Exclude password
    if (!user) return res.status(404).json({ message: "User not found" });
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// // POST: Create a new user (Doctor or Pet Owner)
// router.post("/create-user", async (req, res) => {
//   try {
//     const { name, email, password, role, specialization, experience, clinic_address, contact, pets, address } = req.body;

//     // 🔍 Check if user already exists
//     let existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "❌ User already exists with this email!" });
//     }

//     // 🛑 Validate required fields
//     if (!name || !email || !password || !role) {
//       return res.status(400).json({ message: "❌ Name, Email, Password, and Role are required!" });
//     }

//     // 🔍 Validate email format
//     if (!emailValidator(email)) {
//       return res.status(400).json({ message: "❌ Invalid email format!" });
//     }

//     // 🛑 Validate password strength
//     const passwordStrengthRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
//     if (!passwordStrengthRegex.test(password)) {
//       return res.status(400).json({ message: "❌ Password must be at least 8 characters long and contain both letters and numbers." });
//     }

//     // 🔑 Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // ✅ Create new user object
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//       role,
//       specialization: role === "doctor" ? specialization : undefined,
//       experience: role === "doctor" ? experience : undefined,
//       clinic_address: role === "doctor" ? clinic_address : undefined,
//       contact: role === "doctor" ? contact : undefined,
//       pets: role === "pet_owner" ? pets || [] : undefined,  // Only store pets for pet owners
//       address: role === "pet_owner" ? address : undefined,   // Only store address for pet owners
//     });

//     // 🔥 Save user in database
//     await newUser.save();

//     // ✅ Response without password for security
//     res.status(201).json({
//       message: "✅ User created successfully!",
//       user: {
//         _id: newUser._id,
//         name: newUser.name,
//         email: newUser.email,
//         role: newUser.role,
//         specialization: newUser.specialization,
//         experience: newUser.experience,
//         clinic_address: newUser.clinic_address,
//         contact: newUser.contact,
//         pets: newUser.pets,
//         address: newUser.address,
//       },
//     });

//   } catch (error) {
//     console.error("❌ Error creating user:", error);
//     res.status(500).json({ message: "❌ Server error", error });
//   }
// });

// POST: Create a new user (Doctor or Pet Owner)
router.post("/create-user", async (req, res) => {
    try {
      const { 
        name, email, password, role, 
        specialization, degree, experience, 
        consultationFees, clinic_address, 
        contact, pets, address 
      } = req.body;
  
      // 🔍 Check if user already exists
      let existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "❌ User already exists with this email!" });
      }
  
      // 🛑 Validate required fields
      if (!name || !email || !password || !role) {
        return res.status(400).json({ message: "❌ Name, Email, Password, and Role are required!" });
      }
  
      // 🔍 Validate email format
      if (!emailValidator(email)) {
        return res.status(400).json({ message: "❌ Invalid email format!" });
      }
  
      // 🛑 Validate password strength
      const passwordStrengthRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passwordStrengthRegex.test(password)) {
        return res.status(400).json({ message: "❌ Password must be at least 8 characters long and contain both letters and numbers." });
      }
  
      // 🔑 Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // ✅ Create new user object
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        role,
        // Include doctor-specific fields
        specialization: role === "doctor" ? specialization : undefined,
        degree: role === "doctor" ? degree : undefined,  // Added degree
        experience: role === "doctor" ? experience : undefined,
        consultationFees: role === "doctor" ? consultationFees : undefined,  // Added consultation fees
        clinic_address: role === "doctor" ? clinic_address : undefined,
        contact: role === "doctor" ? contact : undefined,
        // Include pet-owner specific fields
        pets: role === "pet_owner" ? req.body.pets: undefined,
        address: role === "pet_owner" ? address : undefined,
      });
      await newUser.save()
      .then((savedUser) => {
        console.log("✅ User saved:", savedUser);
        res.status(201).json({ 
          message: "✅ User created successfully!", 
          user: savedUser 
        });
      })
      .catch((saveError) => {
        console.error("❌ Error while saving to database:", saveError);
        res.status(500).json({ 
            message: "❌ Database Save Error", 
            error: saveError.message || saveError.toString() || "Unknown error"
        });
      })
    } catch (error) {
      console.error("❌ Server error:", error);
      res.status(500).json({ 
          message: "❌ Server error", 
          error: error.message || error.toString() || "Unknown server error"
      });
    }
  });
      // 🔥 Save user in database
  //     await newUser.save();
  
  //     // ✅ Response without password for security
  //     res.status(201).json({
  //       message: "✅ User created successfully!",
  //       user: {
  //         _id: newUser._id,
  //         name: newUser.name,
  //         email: newUser.email,
  //         role: newUser.role,
  //         specialization: newUser.specialization,
  //         degree: newUser.degree,  // Include degree in the response
  //         experience: newUser.experience,
  //         consultationFees: newUser.consultationFees,  // Include consultation fees in the response
  //         clinic_address: newUser.clinic_address,
  //         contact: newUser.contact,
  //         pets: newUser.pets,
  //         address: newUser.address,
  //       },
  //     });
  
  //   } catch (error) {
  //     console.error("❌ Error creating user:", error);
  //     res.status(500).json({ message: "❌ Server error", error });
  //   }
  // });
  
// POST: Login and Generate Token
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: "Invalid credentials!" });
//     }

//     // Check if the user is active
//     if (user.status !== "active") {
//       return res.status(400).json({ message: "Account is inactive. Please contact support." });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials!" });
//     }

//     // ✅ Generate JWT token
//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     // ✅ Send user details inside a "user" object
//     res.json({
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       }
//     });
//   } catch (error) {
//     console.error("❌ Server error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// POST: Login and Generate Token
router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials!" });
      }
  
      // Check if the user is active
      if (user.status !== "active") {
        return res.status(400).json({ message: "Account is inactive. Please contact support." });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials!" });
      }
  
      // ✅ Generate JWT token
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
  
      // ✅ Send user details inside a "user" object
      res.json({
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        }
      });
    } catch (error) {
      console.error("❌ Server error:", error);
      res.status(500).json({ message: "Server error" });
    }
  });
  
// GET: Get all doctors
router.get("/doctors", async (req, res) => {
  try {
    const doctors = await User.find({ role: "doctor" }); // Fetch only doctors
    res.json(doctors);
  } catch (error) {
    console.error("❌ Error fetching doctors:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
