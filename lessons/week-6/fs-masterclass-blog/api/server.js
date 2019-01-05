'use strict';

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// When /users is hit, let routes/users.js handle the request
app.use('/users', require('./routes/users'))
app.use('/posts', require('./routes/posts'))

// if any of these routes don't work, drop down into below error handler
app.use((err, req, res, next) => {
  // simplified, also inaccurate in many situations
  res.status(500).json(errors);
});

module.exports = app;
