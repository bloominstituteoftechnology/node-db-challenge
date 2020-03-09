exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('projects').del()
      .then(function () {
        // Inserts seed entries
        return knex('projects').insert([
          {id: 1, name: 'Graduate Lambda', description: 'That is what I am here for!'},
          {id: 2, name: 'Grow Up', description: 'The goal of life right?'},
          {id: 3, name: 'Never Grow Up', description: 'I changed my mind, being an adult sucks.'}
        ]);
      });
  };