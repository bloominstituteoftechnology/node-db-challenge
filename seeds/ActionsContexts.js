
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Actions_Context').del()
    .then(function () {
      // Inserts seed entries
      return knex('Actions_Context').insert([
        {id: 1, actionsId: 1, contextsId: 1},
        {id: 2, actionsId: 2, contextsId: 2},
        {id: 3, actionsId: 3, contextsId: 2},
        {id: 4, actionsId: 4, contextsId: 1},
        {id: 5, actionsId: 5, contextsId: 3},
      ]);
    });
};
