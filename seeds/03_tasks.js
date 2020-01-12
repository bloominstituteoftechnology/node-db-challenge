
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, project_id: 1 , task_description: 'Gather wood', completed: false},
        {id: 2, project_id: 1 , task_description: 'Set wood together on ground', completed: false},
        {id: 3, project_id: 1 , task_description: 'Light wood with matches', completed: false},
        {id: 4, project_id: 2 , task_description: 'Set tent stakes', completed: false},
        {id: 6, project_id: 3 , task_description: 'Season steak with seasoning', completed: false},
        {id: 5, project_id: 3 , task_description: 'Run rods through tent into stakes', completed: false},
        {id: 7, project_id: 3 , task_description: 'Set steak on grill for 4 minutes per side', completed: false},
      ]);
    });
};
