
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
          {name: 'RDMS', description: 'Relational Data', completed: false},
          {name: 'Discord Bot', description: 'A discord bot', completed: true},
          {name: 'Slack Bot', description: 'a slack bot', completed: false}
      ]);
    });
};
