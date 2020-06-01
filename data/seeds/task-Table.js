
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        { id: 1, task_desc: 'Gathering Information', task_note: 'Purpose, Main Goals, and Target Audience', completed: 0, project_id: 1 },
        { id: 2, task_desc: 'Gathering Information1', task_note: 'Purpose, Main Goals, and Target Audience', completed: 1, project_id: 1 },
        { id: 3, task_desc: 'Gathering Information2', task_note: 'Purpose, Main Goals, and Target Audience', completed: 0, project_id: 1 },
        { id: 4, task_desc: 'Gathering Information3', task_note: 'Purpose, Main Goals, and Target Audience', completed: 0, project_id: 2 },
        { id: 5, task_desc: 'Gathering Information4', task_note: 'Purpose, Main Goals, and Target Audience', completed: 0, project_id: 2 },
        { id: 6, task_desc: 'Gathering Information5', task_note: 'Purpose, Main Goals, and Target Audience', completed: 1, project_id: 2 },
        { id: 7, task_desc: 'Gathering Information6', task_note: 'Purpose, Main Goals, and Target Audience', completed: 0, project_id: 3 },
        { id: 8, task_desc: 'Gathering Information7', task_note: 'Purpose, Main Goals, and Target Audience', completed: 0, project_id: 3 },
        { id: 9, task_desc: 'Gathering Information8', task_note: 'Purpose, Main Goals, and Target Audience', completed: 1, project_id: 1 },
        { id: 10, task_desc: 'Gathering Information9', task_note: 'Purpose, Main Goals, and Target Audience', completed: 0, project_id: 2 },
        { id: 11, task_desc: 'Gathering Information10', task_note: 'Purpose, Main Goals, and Target Audience', completed: 0, project_id: 1 },
        { id: 12, task_desc: 'Gathering Information11', task_note: 'Purpose, Main Goals, and Target Audience', completed: 1, project_id: 3 },
      ]);
    });
};
