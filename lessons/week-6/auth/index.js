'use strict';

const server = require('./api/server');
const { PORT } = require('./api/utils/constants');
const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/auth'

server.listen(PORT, async () => {
  await mongoose.connect(uri)
  console.log(`App listening on port ${PORT}`)
});