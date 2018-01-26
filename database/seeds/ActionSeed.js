
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, project_id: 3, description: 'decribe1', notes: 'notes1', completed:true},
        {id: 2, project_id: 1, description: 'decribe2', notes: 'notes2', completed:true},
        {id: 3, project_id: 2, description: 'decribe3', notes: 'notes3', completed: false},
      ]);
    });
};
