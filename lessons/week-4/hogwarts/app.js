// require the mongoose package
const mongoose = require('mongoose')
// grab our seeds
const seeds = require('./seeds')

// connect to our db called 'hogwarts'
const uri = 'mongodb://localhost:27017/hogwarts'

// promise-base syntax! '.then()'
// could use async/await
// needs to be a promise so can be asynchornous js
mongoose
  .connect(uri)
  // if successful
  .then(() => {
    // log the message
    console.log(`Successfully connect to: ${uri}`)

    // fill db with student seeds
    seeds()
  })
  .catch( err => console.log(err.message))