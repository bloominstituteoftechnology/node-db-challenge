
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recources').del()
    .then(function () {
      // Inserts seed entries
      return knex('recources').insert([
       { name: 'names informed', description: 'descriptions told' },
        { name: 'PCs', description: 'apple is bitten' },
        { name: 'orange', description: 'yoooooo broooo' }
      ]);
    });
};
