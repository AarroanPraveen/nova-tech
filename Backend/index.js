import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'; // Import the correct routes

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = 4000;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/user', userRoutes); // Use the enquiry routes

// MongoDB Connection
const dbURI = process.env.DB_URI; // Ensure DB_URI is defined in your .env file

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI); // Simplified connection
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit process with failure
    }
};

// Connect to the database
connectDB();

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
