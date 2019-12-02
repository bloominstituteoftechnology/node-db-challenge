
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'LambdaTk', description: 'Instructional videos', task_id: 1},
        {resource_name: 'macbook pro', description: 'google maniac', task_id: 1},
      ]);
    });
};
