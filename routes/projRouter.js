const express = require('express');
const router = express.Router();
const knex = require('knex');

const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

/* ---------- Routes ---------- */

// -----
// - GET for retrieving project by id. Rather than using a join, I'm going to do this
// -     in two parts so that the data can be returned in the format that I want it to.
// - SELECT * from projects WHERE id={id};
// - SELECT * from actions WHERE proj_id={id}
// ----- 
router.get('/:id', (req,res) => {
  const {id} = req.params;
  
  const q1 = db('projects').where('id', id);
  const q2 = db('actions').select('id', 'desc', 'notes', 'completed').where('proj_id', id);

  Promise.all([q1, q2]).then(values => {
    let [project, action] = values;
    project = project[0];
    res.status(200).json({ ...project, actions: action })
  })

});

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