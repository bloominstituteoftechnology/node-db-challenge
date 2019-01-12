const knex = require("knex");
const dbConfig = require("./knexfile.js")
const db = knex(dbConfig.development);

module.exports = {
    addProject,
    addAction,
    getProject,
}

function addProject(project) {
    return db("projects")
        .insert(project)
        .then(ids => ({id: ids[0]}));
}

function addAction(action) {
    return db("actions")
        .insert(action)
        .then(ids => ({id: ids[0]}));
}

//couldn't figure out how to return this in the nested fashion the instructions are calling for
function getProject(id) {
    return db("actions as a")
        .join("projects as p", "p.id", "a.project_id")
        // .select("p.id", "p.project_name", "p.description", "p.completed",
        //     { actions: [
        //         "a.action_description",
        //     }
        //     })
        .where("a.project_id", id)
}