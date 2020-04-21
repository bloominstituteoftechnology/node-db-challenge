const db = require('../../data/dbConfig')

const getTasks = () => {
    return db('tasks')
}

const addTask = (task) => {
    return db('tasks')
        .insert(task)
        .then( (newTask) => {
            return newTask
        })
        .catch( (err) => {
            console.log(err)
        })
}

module.exports = {
    getTasks,
    addTask
}