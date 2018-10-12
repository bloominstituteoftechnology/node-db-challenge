
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: "Front End",
          description:" we'll build a front end project",
          completed: false },
        {
          name: "Back End",
          description: "we will build a backend  project",
          completed: false},
        {
          name: "Capstone",
          description: "we'll combine our front end and back end project",
          completed: false}
      ]);
    });
};
