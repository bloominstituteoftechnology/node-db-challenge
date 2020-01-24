
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          name: 'computer',
          description: 'provided by company associate',
          
        },
      ]);
    });
};
