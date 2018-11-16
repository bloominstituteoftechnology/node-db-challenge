
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'rowValue1', description:'a'},
        {name: 'rowValue2', description:'b'},
        {name: 'rowValue3', description:'c'}
      ]);
    });
};
