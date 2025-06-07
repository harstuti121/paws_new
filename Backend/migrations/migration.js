const mongoose = require("mongoose");
const User = require("../models/User");  // Adjust the path according to your project structure

async function migrateUsers() {
    try {
        // Connect to MongoDB Atlas
        await mongoose.connect("mongodb+srv://data232040:pet1234@paws-paradise.jvnf9.mongodb.net/pet?retryWrites=true&w=majority&appName=Paws-Paradise", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Update documents to include the 'status' field if it doesn't already exist
        const result = await User.updateMany(
            { status: { $exists: false } },  // Check if 'status' field is missing
            { $set: { status: "active" } }   // Set the 'status' field to 'active'
        );

        console.log("Migration result:", result);

        // Disconnect from MongoDB Atlas after migration
        mongoose.disconnect();
    } catch (error) {
        console.error("Error during migration:", error);
        mongoose.disconnect();
    }
}

migrateUsers();
