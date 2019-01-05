const express = require('express')
const router = express.Router();

const books = [
  { id: 1, name: 'Harriet the Spy', author: 'Lady'},
  { id: 2, name: 'Woo Hoo Poo Poo', author: 'Doc Seuss'},
  { id: 3, name: 'State of Fear', author: 'Michael Critchton'},
  { id: 4, name: 'Jurassic Park', author: 'Michael Critchton'}
]

router.route('/:identifier')
  .get((req, res) => {
    const { identifier } = req.params
    const matchingBook = books.filter((book) => {
      if ( book.id === Number(identifier)){
        return true
      } else {
        return false
      }
    })

    if(matchingBook.length > 0) {
      res.json({ data: matchingBook })
    } else {
      res.status(404).send()
    }

  })
  .post((req, res) => {

  })

router.route('/')
  .get((req, res) => {
    res.json({ data: books })
  })
  .post((req, res) => {
    const { body } = req;
    const { name, author } = body;

    const id = books.length;

    const book = {
      id, 
      name,
      author
    }

    books.push(book)

    const result = {
      data: [
        { id }
      ]
    }

    res.json(result)
  })

exports.router = router;