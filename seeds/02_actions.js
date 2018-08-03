exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 0, description: 'Fix downstairs', notes: 'Home proj', iscomplete: 0, projectId: 0},
        {id: 1, description: 'Fix upstairs', notes: 'Home proj', iscomplete: 0, projectId: 0},
        {id: 2, description: 'Repair tires', notes: 'Car proj', iscomplete: 0, projectId: 1},
        {id: 3, description: 'Wash and wax', notes: 'Car proj', iscomplete: 0, projectId: 1},
        {id: 4, description: 'Work organization', notes: 'Work proj', iscomplete: 0, projectId: 2},
        {id: 5, description: 'Setup tasks', notes: 'Work proj', iscomplete: 0, projectId: 2}
      ]);
    });
};