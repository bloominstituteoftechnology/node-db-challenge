const db = require("../data/dbConfig.js");

const knex = require("knex");

const config = require("../knexfile.js");

module.exports = {
    get,
    getById,
    insert
};

function get() {
    return db("tasks");
}
function getById(id) {
    let query = db("tasks as t");
    query.where("r.id", id).first();
    return query.then(function(results) {
        return results;
    });
}

function insert(task) {
    return db("tasks")
        .insert()
        .then(([id]) => this.getById(id));
}