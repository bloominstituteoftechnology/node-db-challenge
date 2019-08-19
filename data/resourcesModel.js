const db = require("../data/dbConfig.js");

const knex = require("knex");

const config = require("../knexfile.js");

module.exports = {
    get,
    getById,
    insert
};

function get() {
    return db("resources");
}
function getById(id) {
    let query = db("resources as r");
    query.where("r.id", id).first();
    return query.then(function(results) {
        return results;
    });
}

function insert(resource) {
    return db("resources")
        .insert()
        .then(([id]) => this.getById(id));
}
