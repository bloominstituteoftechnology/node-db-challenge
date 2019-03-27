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
// READ
const find = () => db('projects')

// READ BY ID
const findById = (id) => {
    db('projects')
        .where({ id })
        .first();
}

// UPDATE
const update = (id, changes) => {
    db('projects')
        .where('id', id)
        .update(changes);
}

// DELETE
const remove = (id) => {
    db('projects')
        .where('id', id)
        .del();
}
