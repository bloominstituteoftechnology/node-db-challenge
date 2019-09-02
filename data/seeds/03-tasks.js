
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {tasks_description: 'add a header, body, and footer to the webpage', tasks_notes: '<header><body><footer>', project_id: 1, completed: true},
        {tasks_description: 'create an animal object that uses a speak method', tasks_notes: null, project_id: 2, completed: true},
        {tasks_description: 'create a react app of your choosing', tasks_notes: null, project_id: 3, completed: false}
      ]);
    });
};
