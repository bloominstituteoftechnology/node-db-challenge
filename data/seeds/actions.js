
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, project_id: 1, description: "give the cat a bath", notes: "make sure to use the new soap", completed: 0},
      ]);
    });
};
