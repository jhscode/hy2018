'use strict';

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/signup', require('./routes/signup').router);
app.use('/login', require('./routes/login').router)
app.use('/users', require('./routes/users').router)

app.use((err, req, res, next) => {
  res.status(500).send({ err: err.message })
});

module.exports = app;
