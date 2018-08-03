
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'Action 1', notes: "note 1", projectId: 3},
        {description: 'Action 2', projectId: 2},
        {description: 'Action 3', notes: "note 1", projectId: 1}
      ]);
    });
};
