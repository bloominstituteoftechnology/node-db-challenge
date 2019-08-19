const db = require("../data/dbConfig.js");

const knex = require("knex");

const config = require("../knexfile.js");

module.exports = {
    get,
    getById,
    insert
};

function get() {
    return db("projects");
}
function getById(id) {
    let query = db("projects as p");
    query.where("p.id", id).first();
    return query.then(function(results) {
        return results;
    });
}

function insert(project) {
    return db("projects")
        .insert()
        .then(([id]) => this.getById(id));
}

