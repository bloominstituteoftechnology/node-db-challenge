
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
      {
        "project_name": "become a ninja master",
        "project_description": "I will train hard and become a ninja master. I will stop at nothing until I have completed my quest.",
        "completed": false
      },
      {
        "project_name": "I will be the next batman",
        "project_description": "There is too much crime in this city. I will stop it by becoming batman. 'I AM BATMAN!",
        "completed": false
      }
      ]);
    });
};
