const db = require("../data/dbConfig.js");

const knex = require("knex");

const config = require("../knexfile.js");

module.exports = {
    get,
    getById,
    insert
};

function get() {
    return db("tasks as t")
        .join("projects as p", "t.project_id", "p.id")
        .select(
            "t.id",
            "t.description",
            "t.notes",
            "t.complete",
            "t.project_id",
            "p.name as project_name",
            "p.description as project_description"
        )
        .then(tasks =>
            tasks.map(task => {
                if (task.complete == 1) {
                    task.complete = true;
                } else task.complete = false;
                return task;
            })
        );
}

function getById(id) {
    let query = db("tasks as t");
    query.where("t.id", id).first();
    return query.then(function(results) {
        return results;
    });
}

function insert(task) {
    return db("tasks")
        .insert(task)
        .then(([id]) => this.getById(id));
}
