
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'clean room', project_description: 'add description here', project_completed: false},
        {id: 2, name: 'organize files on computer', project_description: 'add description here', project_completed: false},
        {id: 3, name: 'cook dinner', project_description: 'add description here', project_completed: false}
      ]);
    });
};
