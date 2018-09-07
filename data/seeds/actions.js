exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          description: 'finish db queries and endpoints',
          notes: 'maybe undo data and start w migrations/seeding?',
          project_id: 1,
        },
        {
          description: 'finish front-end',
          notes: 'get designer help pls',
          project_id: 1,
        },
        {
          description: 'do more stuffs',
          notes: 'organize dat bish',
          project_id: 2,
        },
      ]);
    });
};
