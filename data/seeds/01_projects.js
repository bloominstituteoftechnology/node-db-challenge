
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Project 1', description: "Test Project 1", completed: false}, //1
        {name: 'Project 2', description: "Test Project 2", completed: true}, //2
        {name: 'Project 3', description: "Test Project 3", completed: false} //3
      ]);
    });
};
