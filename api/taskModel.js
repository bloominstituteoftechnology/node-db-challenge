const db = require('../data/db-config');

module.exports ={
    getTask,
    getById,
    insert
}



function getTask() {
    return db('task as t')
    .select('p.project_name as Project Name', 'p.description as Project Description', 't.id', 't.description', 't.notes', 't.completed' )
    .join('project as p','t.project_id','p.id')
    // .then(task => {
    //     const newTask = []// will hold new modified array of objs
    //     task.forEach(task => {
    //         //if completed === 1 return true else return false
    //         if (task.completed === 1) {
    //             return task.completed = true
    //         } else {
    //             return task.completed = false
    //         }
    //     })
    //    newTask.push(task)//push modified array of objects
    //     return newTask
    // })
};

function getById(id) {
    return db('task')
        .where({"task.id": id})
        .first()
        .then(task => {
            if (task.completed === 1) {
                return task.completed = true, task
            } else {
                return task.completed = false , task
            }
        })
};

function insert(task){
    return db('task')
        .insert(task, 'id')
        .then(([id]) => getById(id))
};