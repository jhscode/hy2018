'use strict';

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connect the end point
app.use('/signup', require('./routes/signup'))
app.use('/login', require('./routes/login'))

app.use((err, req, res, next) => {
  res.status(401).json( { err: err.message } );
});

module.exports = app;
