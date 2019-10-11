
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'docs1', description: 'LESS docs'},
        {resource_name: 'docs2', description: 'React docs'},
        {resource_name: 'docs3', description: 'Express docs'}
      ]);
    });
};
