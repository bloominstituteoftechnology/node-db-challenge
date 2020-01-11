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
        .where({ id })
        .first()
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

