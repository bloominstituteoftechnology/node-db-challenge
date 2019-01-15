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
        .select({
            id: "p.id", 
            name: "p.project_name", 
            decription: "p.description", 
            completed: "p.completed",
            actions_id: "a.id",
            action_decription: "a.action_description",
            notes: "a.notes",
            action_completed: "a.action_completed"
        })
        .where("a.project_id", id)
}