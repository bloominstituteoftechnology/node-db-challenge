
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Graduate Lambda', description: 'Like climbing a steep mountain, nay cliff.'},
        {id: 2, name: 'Work in Tech', description: 'An exciting field.'},
        {id: 3,  name: 'Get Rich', description: 'Need I say more?.'}
      ]);
    });
};
