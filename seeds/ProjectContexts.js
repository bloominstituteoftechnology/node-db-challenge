
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Projects_Contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('Projects_Contexts').insert([
        {id: 1, projectid: 1, contextId: 1},
        {id: 2, projectid: 2, contextId: 2},
        {id: 3, projectid: 3, contextId: 1},
        {id: 4, projectid: 4, contextId: 3},
      ]);
    });
};
