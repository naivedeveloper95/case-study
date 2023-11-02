require("dotenv").config();

const mongoose = require('mongoose');

function connectToDatabase() {
    return new Promise((resolve, reject) => {
        const { connect, connection } = mongoose;

        connect(process.env.MONGODB_URI);

        connection.on('error', (error) => {
            console.error('MongoDB connection error:', error);
            reject(error); // Reject the promise on error
        });
        connection.once('open', () => {
            console.log('Connected to MongoDB');
            resolve(connection); // Resolve the promise with the database connection
        });
    });
};

module.exports = {
    connectToDatabase, // Export the connectToDatabase function
};
