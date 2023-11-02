const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Import the modules
const routes = require('./routes');
const startServer = require('./init');

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Middleware to parse cookies
app.use(cookieParser());

// Use the routes defined in routes.js
app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Welcome to the Case Study App');
});

// Intiate db connection
startServer(app);