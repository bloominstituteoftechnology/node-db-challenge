exports.seed = function (knex) {
  return knex('tasks')
    .truncate()
    .then(function () {
      return knex('tasks').insert([
        {
          task_description: 'Use it',
          task_notes: 'code your project',
          task_completed: false,
          project_id: 1,
        },
        {
          task_description: 'Deploy it',
          task_notes: 'Make sure everything works',
          task_completed: false,
          project_id: 1,
        },
        {
          task_description: 'Code a project',
          task_notes: 'Use it to do your Lambda School Projects',
          task_completed: false,
          project_id: 2,
        },
        {
          task_description: 'Make it functional',
          task_notes: 'make it give you winning lotto tickets',
          task_completed: false,
          project_id: 2,
        },
        {
          task_description: 'Install Dependecy',
          task_notes: 'Use it in your projects',
          task_completed: false,
          project_id: 3,
        },
        {
          task_description: 'Build a Button',
          task_notes: 'Make sure it works',
          task_completed: false,
          project_id: 3,
        },
      ]);
    });
};
