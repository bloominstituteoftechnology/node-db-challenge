// intialize knex & database
const knex = require('knex');
const db = require('../../dbConfig'); // intialize database

/* Functions for database searching, to be exported. */

// CREATE
const insert = (newAction) => {
    return db('actions')
        .insert(newAction)
        .into('actions');
}

// READ
const find = () => {
    return db('actions');
}
// READ BY ID
const findById = (id) => {
    return db('actions')
        .where({ id })
        .first();
}

// READY BY PROJECT ID
const findByProjectId = (id) => {
    return db('actions')
    .where('project_id', id)
}

// UPDATE
const update = (id, changes) => {
    return db('actions')
        .where('id', id)
        .update(changes);
}

// DELETE
const remove = (id) => {
    return db('actions')
        .where('id', id)
        .del();
}

/* Module exports for use in routers */
module.exports = {
    // CRUD operation exports
        find, // [x] logic for READ/get
        findById, // [x] logic for READ/get by ID
        findByProjectId, // [x] logic for getting actions by project id
        insert, // [x] logic for CREATE/post
        remove, // [] logic for DELETE/delete
        update, // [] logic for PUT/update
    }