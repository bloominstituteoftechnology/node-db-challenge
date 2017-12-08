
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projectcontexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('projectcontexts').insert([
        {id: 1, projectId: '1', contextId: "1"}
      ]);
    });
};
