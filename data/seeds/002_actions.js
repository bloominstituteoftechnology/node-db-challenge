
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { description: 'Make backend API with Node.js and express', notes: 'Read training kit', project_id: 1, completed: false },
        { description: 'Learn Python and Django', notes: 'Start Udemy Course', project_id: 2, completed: false },
        { description: 'Study new React Hooks', notes: 'Read react docs', project_id: 3, completed: true },
      ]);
    });
};
