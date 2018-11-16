
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'Redux', description: 'reduxadux', completed: 0},
        {name: 'Frontend', description: 'Frontend', completed: 0},
        {name: 'codestuff', description: 'ffutsedoc', completed: 0}
      ]);
    });
};