
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'yarn add global knex', notes: '1'},
        {description: 'knex init', notes: '2'},
        {description: 'yarn add knex express sqlite3', notes: '3'},
        {description: 'knex migrate:make <name>', notes: '4'},
        {description: 'knex seed:make', notes: '5'},
      ]);
    });
};
