
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'science'},
        {id: 2, name: 'math'},
        {id: 3, name: 'english'}
      ]);
    });
};
