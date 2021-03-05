// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
//Makes this Heroku workable.
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//code goes here.

const tables = require('./data/tableData');
const reservations = require('./data/waitinglistData');

// routes required
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// listenter

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));