const db = require("../data/db-config")

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db("resource")
}

function findById(id) {
    return db("resource")
        .where({ id })
        .first()
}

async function add(resource) {
    const [id] = await db("resource")
        .insert(resource)
    return db("resource")
        .where({ id })
        .first()
}

function update(resource, id) {
    return db("resource")
        .where({ id })
        .update(resource)
}

function remove(id) {
    return db("resource")
        .where({ id })
        .del()
}

