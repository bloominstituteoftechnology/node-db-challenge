
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gtd').del()
    .then(function () {
      // Inserts seed entries
      return knex('gtd').insert([
        {id: 1, actionsId: 2, contextsId: 1},
        {id: 2, actionsId: 1, contextsId: 3},
        {id: 3, actionsId: 3, contextsId: 2},
      ]);
    });
};
