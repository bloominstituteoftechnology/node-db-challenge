
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, projectId: 1, description: 'first project (a) action description' , notes: 'some note goes here', completed: true},
        {id: 2, projectId: 2, description: 'second project (a) action description' , notes: 'some note goes here (abc)', completed: false},
        {id: 3, projectId: 1, description: 'first project (b) action description' , notes: 'some note goes here (cba)', completed: false},
        {id: 4, projectId: 2, description: 'second project (b) action description' , notes: 'some note goes here', completed: true}
      ]);
    });
};
