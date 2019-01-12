const express = require('express');
const router = express.Router();
const knex = require('knex');

const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

/* ---------- Routes ---------- */

// -----
// - POST for adding projects
// - INSERT INTO projects ('name','desc','completed') VALUES ('','',0);
// ----- 
router.post('/', (req,res) => {
  const projData = req.body;

  // Check for empty fields:
  if( projData.name && projData.desc ) {
    db('projects').insert(projData)
      .then( (newId) => {
        res.status(201).json(newId);
      })
      .catch( (err) => {
        res.status(500).json({ error: "Could not add new project." });
      });
    // end-db
  } else {
    res.status(400).json({ error: "Please provide a name and description for the project." });
  }
});


/* ---------- Export ---------- */
module.exports = router;