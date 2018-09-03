const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');

const apiRoute = require('./api/users');

app.use(bodyParser.json());
app.use(express.static('dist'));
app.use('/api', apiRoute);

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});



module.exports = app;
