const db = require("../data/db-config")

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db("resources")
}

function findById(id) {
    return db("resources")
        .where({ id })
        .first()
}

async function add(recipeName) {
    const [id] = await db("resources")
        .insert(recipeName)
    return db("resources")
        .where({ id })
        .first()
}

function update(ingredients, id) {
    return db("resources")
        .where({ id })
        .update(ingredients)
}

function remove(id) {
    return db("resources")
        .where({ id })
        .del()
}

