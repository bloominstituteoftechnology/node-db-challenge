
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, description: 'action description', notes: 'the action notes', completed: false, projectId: 1},
        {id: 2, description: 'action description 2', notes: 'the action notes', completed: true},
        {id: 3, description: 'action description 3', notes: 'the action notes', completed: true},
        {id: 4, description: 'action description 4', notes: 'the action notes', completed: true},
        {id: 5, description: 'action description 5', notes: 'the action notes', completed: true},
        {id: 6, description: 'action description 6', notes: 'the action notes', completed: true},
        {id: 7, description: 'another action description', notes: 'the action notes', completed: false, projectId: 1},
      ]);
    });
};
