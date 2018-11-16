
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {IdStatus:1, Name: 'KeaTime', Description: 'A Time Entry Application'},
        {IdStatus:1, Name: 'Job Tracker', Description: 'A Job Tracking Application'},
      ]);
    });
};
