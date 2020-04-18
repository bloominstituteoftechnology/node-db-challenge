const Tasks = require('../../data/dbConfig')

const getTasks = () => {
    return db('tasks')
        .join('projects', 'tasks.project_id', 'projects.id')
        .select('tasks.*', 'projects.project_name', 'projects.project_desc')
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