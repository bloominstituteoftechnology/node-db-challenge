//import config for db
const db = require('../data/dbConfig');

module.exports = {
    findTasks,
    addTasks
}
//create helper functions for server
function findTasks() {
    return db('tasks');
}

function addTasks(task) {
    return db('tasks')
        .insert(task)
        .then(t_ids => {
            return db('tasks')
                .where({ id: t_ids[0] })
                .first();
        })
        .catch(err => {
            console.log(err)
        });
};