const express = require('express');
const router = express.Router();
const knex = require('knex');

const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

/* ---------- Routes ---------- */

// -----
// - POST for adding actions
// - INSERT INTO actions ('desc','notes','completed', 'proj_id') VALUES ('','',0,0);
// ----- 
router.post('/', (req,res) => {
  const actsData = req.body;

  // Check for empty fields, leaving "notes" as optional:
  if( actsData.desc && actsData.proj_id ) {
    db('actions').insert(actsData)
      .then( (newId) => {
        res.status(201).json(newId);
      })
      .catch( (err) => {
        res.status(500).json({ error: "Could not add new action." });
      });
    // end-db
  } else {
    res.status(400).json({ error: "Please provide a description and project id for the action." });
  }
});


/* ---------- Export ---------- */
module.exports = router;