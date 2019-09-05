
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'add a header, body, and footer to the webpage', notes: '<header><body><footer>', project_id: 1, completed: true},
        {description: 'create an animal object that uses a speak method', notes: null, project_id: 2, completed: true},
        {description: 'create a react app of your choosing', notes: null, project_id: 3, completed: false}
      ]);
    });
};
