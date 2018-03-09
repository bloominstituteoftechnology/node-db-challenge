
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_id: 1, name: 'Make birthday card for mom', description: ''},
        {project_id: 2, name: 'Finish personal app project', description: ''},
        {project_id: 3, name: 'Construct model plane', description: ''}
      ]);
    });
};
