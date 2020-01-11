const db = require("../data/db-config")

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db("project_resource")
}

function findById(id) {
    return db("project_resource")
        .where({ id })
        .first()
}

async function add(project_resource) {
    const [id] = await db("project_resource")
        .insert(project_resource)
    return db("project_resource")
        .where({ id })
        .first()
}

function update(project_resource, id) {
    return db("project_resource")
        .where({ id })
        .update(project_resource)
}

function remove(id) {
    return db("project_resource")
        .where({ id })
        .del()
}

