
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: 'Test Action 1-1', notes: "Test Action for Project 1", completed: true, project_id: 1},
        {description: 'Test Action 1-2', notes: "Test Action for Project 1", completed: false, project_id: 1},
        {description: 'Test Action 1-3', notes: "Test Action for Project 1", completed: false, project_id: 1},
        {description: 'Test Action 2-1', notes: "Test Action for Project 2", completed: true, project_id: 2},
        {description: 'Test Action 2-2', notes: "Test Action for Project 2", completed: false, project_id: 2},
        {description: 'Test Action 2-3', notes: "Test Action for Project 2", completed: false, project_id: 2},
        {description: 'Test Action 3-1', notes: "Test Action for Project 3", completed: true, project_id: 3},
        {description: 'Test Action 3-2', notes: "Test Action for Project 3", completed: false, project_id: 3},
        {description: 'Test Action 3-3', notes: "Test Action for Project 3", completed: false, project_id: 3},
      ]);
    });
};
