const express = require('express')
const router = express.Router();

const letters = [
  { type: 'letter', from: "Jani", to: "Jorge" },
  { type: 'letter', from: "Jane", to: "Aaron" },
  { type: 'letter', from: "Jill", to: "Rory" },
  { type: 'letter', from: "Jack", to: "Rory" },
  { type: 'letter', from: "Jack", to: "Jill" },
  { type: 'letter', from: "Jack", to: "Jack" },
  { type: 'letter', from: "Jack", to: "Jane" },
  { type: 'letter', from: "Jack", to: "Julio" },
  { type: 'letter', from: "Jack", to: "Jani" }
]

router.route('/')
  .get((req, res) => {
    const result = {
      data: letters
    }

    res.json(result)
  })
  .post((req, res) => {
    // const body = req.body
    const { type, from, to } = req.body;
    if( type && from && to) {
      const mail = {
        type: req.body.type,
        from: req.body.from,
        to: req.body.to
      };

      letters.push(mail);
      res.send('got it');
    }
    else {
      res.status(400).send();
    }
  })

exports.router = router;