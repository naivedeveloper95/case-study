const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Ensure usernames are unique
    },
    password: {
        type: String,
        required: true,
    },
    colorPreference: {
        type: String,
        default: 'blue', // Default color preference, you can change this
    },
});

module.exports = model('User', userSchema);
