
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, project_id: 1, description: 'Write code', notes: 'Code review'},
        {id: 2, project_id: 2, description: 'Testing', notes: 'Take Feedback'},
        {id: 3, project_id: 3, description: 'User Testing', notes: 'Implement Changes'}
      ]);
    });
};
