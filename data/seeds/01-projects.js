
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'name0', description: 'description0', completed: 1 },
        { name: 'name1', description: 'description1', completed: 0 },
        { name: 'name2', description: 'description2', completed: 0 }
      ]);
    });
};