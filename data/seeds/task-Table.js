
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        { id: 1, task_desc: 'rowValue1', task_note: 'rowValue1', completed: 0, project_id: 1 }
      ]);
    });
};
