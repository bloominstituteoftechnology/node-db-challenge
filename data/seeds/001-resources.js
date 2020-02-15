
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Lambda', description: 'Woop woop'},
        {id: 2, name: 'Udemy', description: 'Yeet'},
        {id: 3, name: 'FreeCodeCamp', description: 'Awww yeah'}
      ]);
    });
};