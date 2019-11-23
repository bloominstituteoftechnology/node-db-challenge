const db = require('../data/db-config');


// Return all Tasks
function find() {
 /* return db('task');
  } */
  let query = db('project')
  // Join task and project on id row
        .join('task', 'project.id', '=', 'task.project_id')
  // Select fields needed, renamed to avoid conflicts & for readability
        .select(
            'project.name as project_name',
            'project.description as project_description',
            'task.description as task_description',
            'task.notes as task_notes',
            'task.completed as task_completed'
        );
  // Map over array of tasks to return list w/ bool converted
    return query.then(tasks => {
        return tasks.map(task =>
            task = {
                ...task, task_completed: intToBoolean(task.complete),

            }

        );
    });
}

// Included to provide "under the hood" functionality so Add returns an object not an id
function findById(id) {
    return db('task').where({ id }).first();
    }

// Add new Task
function add(newTask) {
    return db('task').insert(newTask)
          .then(ids => {
            return findById(ids[0]);
          });
        }

// Delete Task
function remove(id) {
    return db('task').where({ id }).del();
}

function intToBoolean(int) {

  return int === 1 ? true : false;
}

module.exports = {
    find,
    findById,
    add,
    remove,
    intToBoolean
};