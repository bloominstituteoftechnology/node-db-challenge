const db = require("../data/db-config")

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db("tasks")
}

function findById(id) {
    return db("tasks")
        .where({ id })
        .first()
}

async function add(recipeName) {
    const [id] = await db("tasks")
        .insert(recipeName)
    return db("tasks")
        .where({ id })
        .first()
}

function update(ingredients, id) {
    return db("tasks")
        .where({ id })
        .update(ingredients)
}

function remove(id) {
    return db("tasks")
        .where({ id })
        .del()
}

