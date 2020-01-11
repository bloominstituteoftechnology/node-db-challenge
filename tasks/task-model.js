const db = require("../data/db-config")

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db("task")
}

function findById(id) {
    return db("task")
        .where({ id })
        .first()
}

async function add(task) {
    const [id] = await db("task")
        .insert(task)
    return db("task")
        .where({ id })
        .first()
}

function update(task, id) {
    return db("task")
        .where({ id })
        .update(task)
}

function remove(id) {
    return db("task")
        .where({ id })
        .del()
}

