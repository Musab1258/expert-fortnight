const express = require('express');
const app = express();

// PORT
require('dotenv').config();
const port = process.env.PORT || 4000;

// Setup database
const db = require('./src/database/setup');
db();

// listening to port
app.listen(port, () => {
    console.log(`app running on port ${port}`);
});
