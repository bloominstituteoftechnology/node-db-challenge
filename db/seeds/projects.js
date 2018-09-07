
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: "React Instaclone", description: "A project to build on React skills"},
        {name: "Node Blog", description: "Build out API endpoints, CRUD operations"},
        {name: "Front End Project Week", description: "Build out a notes application"}
      ]);
    });
};
