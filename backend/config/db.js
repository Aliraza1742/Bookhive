const mongoose = require("mongoose"); // Import mongoose for MongoDB object modeling

const connectDB = async () => {
  try {
    // Attempt to connect to the database using the connection URI from environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Use the new URL parser
      useUnifiedTopology: true, // Keeps the connection stable
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`); // Log the host of the connected database
  } catch (error) {
    console.error("Database Connection Error:", error.message); // Log any connection errors
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB; 
