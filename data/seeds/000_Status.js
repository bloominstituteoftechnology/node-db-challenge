
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Status').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Status').insert([
        {Description: 'Open'},
        {Description: 'InProgress'},
        {Description: 'Done'}
      ]);
    });
};
