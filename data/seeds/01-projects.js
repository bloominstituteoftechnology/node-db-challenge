
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: "Webdev 101",
        description: "another project",
        completed: 0},
        {name: " IOS 301",
        description: "completed ios phone app ",
        completed: 0},
        {name: "database 401",
        description: "another project database maintenance",
        completed: 0},
      ]);
    });
};
