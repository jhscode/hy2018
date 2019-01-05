const sentencer = require('sentencer')
const os = require('os')

const names = [
  'Aaron', 
  'Beth',
  'Carol',
  'Dave',
  'Erin',
  'Faith'
]

exports.pickNames = () => {
  const randomNameIndex = Math.floor(Math.random() * names.length)
  return names[randomNameIndex]
}

exports.generateSentence = () => {
  return sentencer.make('The {{ adjective }} brown {{ noun }} jumped over the {{ adjective }} {{ noun }}')
}


exports.uptime = () => os.uptime() / 60 / 60 / 24;

// modules.exports = {
//  randomName: pickNames
// }