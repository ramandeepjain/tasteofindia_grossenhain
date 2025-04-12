require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());


// Import and use routes
const postEmailRoute = require('./routes/postEmail');
const postReservationsRoute = require('./routes/postReservations');
const getReservationsRoute = require('./routes/getReservations');

app.use(postEmailRoute);
app.use(postReservationsRoute);
app.use(getReservationsRoute);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
