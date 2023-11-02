require("dotenv").config();

const { connectToDatabase } = require('../database');

async function startServer(app) {
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
}

module.exports = startServer;
