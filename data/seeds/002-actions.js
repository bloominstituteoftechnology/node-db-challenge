
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description: "Componetize the footer", notes: "", completed: false, project_id: 1},
        {description: "Componetize the jumbotron with conditional rendering", notes: "", completed: false, project_id: 1},
        {description: "Add animations", notes: "", completed: false, project_id: 1},
        {description: "Add gatsby-image", notes: "", completed: false, project_id: 1},
        {description: "If necessary, refactor images", notes: "", completed: false, project_id: 1},
        {description: "Watch Scott Tolinski's Pro Gatsby Series", notes: "", completed: false, project_id: 2},
        {description: "Complete the code along blog project", notes: "", completed: false, project_id: 2},
        {description: "Refactor if necessary", notes: "", completed: false, project_id: 2},
      ]);
    });
};
