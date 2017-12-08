
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'bob', description: 'school',project_done: false, 
        action_id: 2, context_id: 4},
        {name: 'joe', description: 'work',project_done: false, 
        action_id: 2, context_id: 1},
        {name: 'mike', description: 'kitchen',project_done: false, 
        action_id: 3, context_id: 3},
        {name: 'greg', description: 'cooking',project_done: false, 
        action_id: 4, context_id: 2},
        {name: 'hansen', description: 'car',project_done: false, 
        action_id: 2, context_id: 1},
        {name: 'francis', description: 'toy',project_done:false, 
        action_id: 2, context_id: 3}
      ]);
    });
};
