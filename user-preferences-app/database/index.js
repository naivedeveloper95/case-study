require("dotenv").config();

const mongoose = require('mongoose');

// Export the connectToDatabase function
exports.connectToDatabase = () => {
    return new Promise(async (resolve, reject) => {
        const { connect, connection } = mongoose;

        await connect(process.env.MONGODB_URI);

        connection.on('error', (error) => {
            console.error('MongoDB connection error:', error);
            reject(error); // Reject the promise on error
        });
        connection.once('open', () => {
            console.log('Connected to MongoDB');
            resolve(connection); // Resolve the promise with the database connection
        });
    }).catch(err => console.error(err));
};