const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const mailboxHandler = require('./mailbox')
const bookHandler = require('./books')

app.use('/mailbox', mailboxHandler.router)
app.use('/books', bookHandler.router)

module.exports = app;

// app.listen(PORT, () => console.log(`App listening on port ${PORT}`))