//delete then seed tasksin to the db
exports.seed = function (knex) { 
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        { id: 1, task_description: 'create schema', task_notes: 'draw out normalized data schema', project_id: 1, completed: 0 },
        { id: 2, task_description: 'test server', task_notes: 'use insomnia', project_id: 2, completed: 0 },
      ]);
    });
}