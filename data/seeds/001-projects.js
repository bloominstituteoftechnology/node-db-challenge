
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'CS10', description : 'proj1 '  },
        { name: 'CS11', description : ' proj 2 ' },
        { name: 'FSW14', description : 'proj 3 ' }
      ]);
    });
};
