
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Resource').insert([
        {id: 1, name: "hammer", description: "to hit nails", p_id: 1},
        {id: 2, name: "pencil", description: "to write stuff", p_id: 2},
        {id: 3, name: "computer", description: "to go on the internet", p_id: 2}
      ]);
    });
};
