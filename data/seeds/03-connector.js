
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('connector').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('connector').insert([
        { connect: 'Project 1'},
        { connect: 'Project 2'},
        { connect: 'Project 3'}
      ]);
    });
};
