
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id: '2', description: 'Eat everything', notes: 'Start with ice cream'},
        {project_id: '3', description: 'Program everything Lambda has to offer!'},
        {project_id: '1', description: 'Sleep everywhere', notes: 'Sleep in a bed last'},
        {project_id: '3', description: 'Practice code challenges', notes: 'Check out Lambda replit challenges'},
      ]);
    });
};
