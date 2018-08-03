
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Sprint RDBMS',
        description: 'Database migrations and api'
        },
        {name: 'Stretch',
        description: 'Extra stuff'
        },
      ]);
    });
};
