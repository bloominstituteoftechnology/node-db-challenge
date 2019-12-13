
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Project').insert([
        {id: 1, name: "project1", description: "doing stuff"},
        {id: 2, name: "project2", description: "doing more stuff"}
      ]);
    });
};
