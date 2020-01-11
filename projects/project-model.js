const db = require("../data/db-config")

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db("projects")
}

function findById(id) {
    return db("projects")
        .where({ id })
        .first()
}

async function add(recipeName) {
    const [id] = await db("projects")
        .insert(recipeName)
    return db("projects")
        .where({ id })
        .first()
}

function update(ingredients, id) {
    return db("projects")
        .where({ id })
        .update(ingredients)
}

function remove(id) {
    return db("projects")
        .where({ id })
        .del()
}

