
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'name1', description: 'text1', complete: false},
        {id: 2, name: 'name2', description: 'text2', complete: true},
        {id: 3, name: 'name3', description: 'text3', complete: true}
      ]);
    });
};
