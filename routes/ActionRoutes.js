const express = require('express');
const db = require('../helpers/actions.js');

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
  db.get()
  .then((response) => {
    res.status(200).json(response);
  })
  .catch((err) => {
    console.error(err);
  })
});

router.get('/:id', (req, res) => {
  db.get(req.params.id)
  .then((response) => {
    res.status(200).json(response);
  })
  .catch((err) => {
    console.error(err);
  })
});

router.post('/', (req, res) => {
  db.insert(req.body)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "There was an error with the request" });
    });
});

router.put('/edit/:id', (req, res) => {
  db.update(req.params.id, req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.error(err);
      res.status(404).json({ message: "Requested action not found" });
    })
});

router.delete('/delete/:id', (req, res) => {
  db.delete(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.error(err);
      res.status(404).json({ message: "Requested action not found" });
    })
})

module.exports = router;
