
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_id: 1, name: 'Make birthday card for mom', description: 'Make card from scratch starting with a folded cardboard card'},
        {project_id: 2, name: 'Finish personal app project', description: 'Fullstack application'},
        {project_id: 3, name: 'Construct model plane', description: 'Plastic model kits'}
      ]);
    });
};
