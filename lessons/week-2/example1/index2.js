const randomStuff = require('./names')

const name = randomStuff.pickNames()
// console.log(name)

const coolSentence = randomStuff.generateSentence();
// console.log(coolSentence)

const uptime = randomStuff.uptime();
console.log(uptime)