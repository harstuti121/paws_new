// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     role: { type: String, enum: ["doctor", "pet_owner"], required: true },

//     // Fields for Doctors
//     specialization: { type: String },
//     experience: { type: Number },
//     clinic_address: { type: String },
//     contact: { type: String },

//     // Fields for Pet Owners
//     pets: [{
//         name: String,
//         type: String,
//         breed: String,
//         age: Number,
//         medical_history: [String]
//     }],
//     address: { type: String }
// }, { collection: "User" }); 

// module.exports = mongoose.model("User", UserSchema);

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["doctor", "pet_owner"], required: true },
  contact: { type: String },
  // Fields for Doctors
  specialization: { type: String },
  degree: { type: String },  // Added degree field
  experience: { type: Number },
  consultationFees: { type: Number },  // Added consultation fees field
  clinic_address: { type: String },  
  // Fields for Pet Owners
  pets: [{
    name: String,
    type: String,
    breed: String,
    age: Number,
  }],
  address: { type: String },

  // New Field: status (can be optional or default value)
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
}, { collection: "User" });

// module.exports = mongoose.model("User", UserSchema);
const User = mongoose.model('User', UserSchema);
module.exports = User;