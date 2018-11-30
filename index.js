const express = require('express');
const helmet = require('helmet');
const knexConfig = require('./knexfile');
const knex = require('knex');
 
 
const server = express();

//Initialize db
const db = knex(knexConfig.development);

//Connect Middleware to Server 
server.use(helmet(), express.json());

// SANITY CHECK
server.get('/', (request, response) => {
    response.send("Let's get it!")
});

const port = 8888;
server.listen(port, () => {console.log(`\n#### Server running on port ${port} ####\n`)})

// const express = require('express');
// const knex = require('knex');
// const knexConfig = require('./knexfile.js');
// const db = knex(knexConfig.development);
// const server = express();
//  server.use(express.json());
//  // ___________ POST Project_______________
// //[POST] /api/cohorts This route should save a new cohort to the database.
// server.post('/api/cohorts', (req, res) => {
//   const cohort = req.body;
//   db('cohorts_table')
//     .insert(cohort)
//     //.returning('id')
//     .then(ids => {
//       res.status(201).json(ids);
//     })
//      .catch(err => {
//       res.status(500).json({ message: 'Error inserting', err });
//     });
// });