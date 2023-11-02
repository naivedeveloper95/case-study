require("dotenv").config();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Import the User model
const User = require('../models/UserPreference');

exports.signIn = async (req, res) => {
    // Validate the user's credentials
    const { username, password } = req.body;

    const user = User.findOne({ username });

    if (!user) {
        return res.status(401).json({ message: 'User not found!' });
    }

    // Validate the password using bcrypt
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
        // Generate a JWT token
        const token = jwt.sign({ username }, process.env.JWT_SECRET_KEY, {
            expiresIn: '1h', // Token expiration time
        });

        // Set the token in an HttpOnly cookie with Secure flag
        res.cookie('token', token, {
            httpOnly: true,
            secure: true, // Set to true for HTTPS environments
            sameSite: 'strict',
        });

        res.status(200).json({ message: 'Sign-in successful' });
    } else {
        res.status(401).json({ message: 'Incorrect Password!' });
    }
};

exports.signup = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        // Hash the password using bcrypt
        const saltRounds = process.env.SALT_ROUNDS || 10;
        const hashedPassword = bcrypt.hash(password, saltRounds);

        // Create the user with the hashed password
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};