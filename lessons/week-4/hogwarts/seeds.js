// think of seeds as a fresh start for the app


// require our student model
const Student = require('./models/student')

const Teacher = require('./models/teacher')


// create a student
const hermione = new Student({
  firstName: "Hermione",
  lastName: "Granger",
  birthday: new Date('Sept 19 1973'),
  house: 'Gryffindor',
  friends: ['Ron', 'Harry']
})

const harry = new Student({
  firstName: "Harry",
  lastName: "Potter",
  birthday: new Date('Sept 19 1973'),
  house: 'Gryffindor',
  friends: ['Hermione', 'Harry']
})

const ron = new Student({
  firstName: "Ron",
  lastName: "Weasley",
  birthday: new Date('Sept 19 1973'),
  house: 'Gryffindor',
  friends: ['Hermione', 'Harry']
})

const jorge = new Teacher({
  firstName: "Jorge",
  lastName: "Stark",
  birthday: new Date('Jan 19 1963'),
})

module.exports = async () => {
  // two async functions in try block, 
  // because interacting with a database and may take time

  try {
    // remove all existing students from db
    await Student.remove({})

    // save new student
    // 'doc' = document. MongoDB is a collection of documents
    // const doc = await hermione.save()

    const doc1 = await hermione.save()
    const doc2 = await harry.save()
    const doc3 = await ron.save()
    console.log(doc1, doc2, doc3)

    await Teacher.remove({})
    const doc4 = await jorge.save()
    console.log(doc4)
  } 
  catch(e) {
    console.log(e)
  }
}