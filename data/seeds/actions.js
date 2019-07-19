
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, description: 'do research', notes: '...', complete: false, project_id: 1},
        {id: 2, description: 'draw out concepts', notes: '...', complete: false, project_id: 1},
        {id: 3, description: 'start building', notes: '...', complete: false, project_id: 1},
        {id: 4, description: 'Apply for jobs', notes: '...', complete: true, project_id: 2},
        {id: 5, description: 'get an interview', notes: '...', complete: true, project_id: 2},
        {id: 6, description: 'profit', notes: '...', complete: true, project_id: 2}
      ]);
    });
};
