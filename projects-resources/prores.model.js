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

async function add(recipeName) {
    const [id] = await db("project_resource")
        .insert(recipeName)
    return db("project_resource")
        .where({ id })
        .first()
}

function update(ingredients, id) {
    return db("project_resource")
        .where({ id })
        .update(ingredients)
}

function remove(id) {
    return db("project_resource")
        .where({ id })
        .del()
}

