exports.seed = function (knex, Promise) {
  return knex('action')
    .del()
    .then(function () {
      return knex('action').insert([{
        description: 'knex',
        notes: 'knex init',
        project_id: 1
      }, 
    ]);
    });
};