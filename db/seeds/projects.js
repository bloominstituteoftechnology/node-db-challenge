
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Front End', description: "During this week we will build out the front end of a project", completed: false},
        {name: 'Back End', description: "During this week we will build out the backend of a project", completed: false},
        {name: 'Capstone', description: "During this week we will combine our front end and back end skills for a project", completed: false}
      ]);
    });
};
