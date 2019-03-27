// intialize knex & database
const knex = require('knex');
const db = require('../../dbConfig'); // intialize database

/* Module exports for use in routers */
module.exports = {
// CRUD operation exports
    find, // [x] logic for READ/get
    findById, // [x] logic for READ/get by ID
    insert, // [] logic for CREATE/post
    remove, // [] logic for DELETE/delete
    update, // [] logic for PUT/update
}

/* Functions for database searching, to be exported. */

// CREATE
const insert = (project) => {
    db
        .insert(project)
        .into('projects')
}
