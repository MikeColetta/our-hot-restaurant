const table = require('./data/tableData');
const waitlist = require('./data/waitinglistData');
const express = require('express');

const app = express();
const PORT = 3000;

app.get('/api/table', (req, res) => res.json(table));
app.get('/api/waitlist', (req, res) => res.json(waitlist));


app.post('/api/table', (req, res) => {
  if (tableData.length < 5) {
    tableData.push(req.body);
    res.json(true);
  } else {
    waitlistData.push(req.body);
    res.json(false);
  };
});