import express from 'express';
import User from '../models/userModel.js'; // Ensure you have a `userModel.js` file in the `models` directory.

const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create a new user
        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        console.error('Server error:', err);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

export default router; // Export the router
