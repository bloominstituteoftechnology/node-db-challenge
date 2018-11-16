
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { description: 'set up dependancies',
          notes: 'use the command line',
          project_id: 1 },
        { description: 'set up the migrations',
          notes: 'check out knexjs.org for more info',
          project_id: 1 },
        { description: 'set up server',
          notes: 'check out some of the older projects if you get stuck',
          project_id: 1 }
      ]);
    });
};
