
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, projectId: 1, description: 'walk - treadmill desk'},
        {id: 2, projectId: 1, description: 'squats & lunges - laundry'},
        {id: 3, projectId: 1, description: 'walk - park far away'},
        {id: 4, projectId: 2, description: 'choose a notes/list app'},
        {id: 5, projectId: 3, description: 'get a raise'},
        {id: 6, projectId: 4, description: 'choose paint colors', completed: true},
        {id: 7, projectId: 4, description: 'buy paint and supplies', completed: true},
        {id: 9, projectId: 4, description: 'paint room 2 coats', completed: true},
        {id: 8, projectId: 4, description: 'move furniture', completed: true},
        {id: 10, projectId: 4, description: 'replace furniture', completed: true}
      ]);
    });
};
