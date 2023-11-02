require("dotenv").config();

const { connectToDatabase } = require('../database');

exports.startServer = async (app) => {
    try {
        await connectToDatabase();
        // Perform any operations that require the database connection here

        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error(error);
    }
};
