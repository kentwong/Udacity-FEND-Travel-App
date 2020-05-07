const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

// Configure environment variable for API keys
dotenv.config();

// Start up an instance of app
const app = express();

console.log(process.env.WEATHERBIT_API_KEY);

// Dependencies
const bodyParser = require('body-parser');

// Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// Setup Server
const port = process.env.port || 8081;
const server = app.listen(port, () => console.log(`server is running on local host: ${port}`));

// Setup empty JS object to act as endpoint for all routes
projectData = [];

// GET Route - Initial Display
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// GET Route - show what is in the data
app.get('/all', function (req, res) {
    res.send(projectData);
})

// POST Route - add new data to the object
app.post('/addData', function (req, res) {
    newEntry = {
        city: req.body.city,
        country: req.body.country,
        date: req.body.date,
        endDate: req.body.endDate,
        tripLength: req.body.tripLength,
        remain: req.body.remain,
        noForecast: req.body.noForecast,
        high: req.body.high,
        low: req.body.low,
        description: req.body.description,
        icon: req.body.icon,
        img: req.body.img
    }

    // Making newEntry the first of array
    projectData.unshift(newEntry);
    res.send(projectData);
})
