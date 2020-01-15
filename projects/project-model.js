//model interfaces with the db. Without models, you have to write raw SQL. Router to model, model to db.

const db = require("../data/db-config")

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db("project")
}

function findById(id) {
    return db("project")
        .where({ id }) //accepts an id parameter. 
        .first()//returns first item (row) in the array, which is an object. 
}

async function add(project) {
    const [id] = await db("project")
        .insert(project)
    return db("project")
        .where({ id })
        .first()
}

function update(project, id) {
    return db("project")
        .where({ id })
        .update(project)
}

function remove(id) {
    return db("project")
        .where({ id })
        .del()
}

