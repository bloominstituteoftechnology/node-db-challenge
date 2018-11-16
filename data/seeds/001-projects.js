
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'CS10', description : 'proj1 ', completed: false  },
        { name: 'CS11', description : ' proj 2 ', completed: false },
        { name: 'FSW14', description : 'proj 3 ', completed: false }
      ]);
    });
};
