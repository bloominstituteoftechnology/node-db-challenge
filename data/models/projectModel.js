// intialize knex
const knex = require('knex');
const db = require('../../dbConfig'); // intialize database

module.exports = {
// CRUD operation exports
    find, // logic for READ/get
    findById, // logic for READ/get by ID
    insert, // logic for CREATE/post
    remove, // logic for DELETE/delete
    update, // logic for PUT/update
}