
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          description: "Create-react - app",
          notes: "filename",
          completed: false,
          project_id: 1},
        {
          description: "Dependencies: axios, and others",
          notes: "use yarn add react-router-dom",
          completed: false,
          project_id: 1},
        {
          description: "Create design",
          notes: "pixel perfect",
          completed: false,
          project_id: 2}
      ]);
    });
};
