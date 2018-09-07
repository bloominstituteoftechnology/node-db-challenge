exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          name: "Create-react-app",
          description: "create a new file and give it a name",
          notes: "create-react-app filename",
          completed: false,
          project_id: 1
        },
        {
          name: "Install dependencies",
          description:
            "react-router-dom, axios, and others will need to be added",
          notes:
            "use yarn add react-router-dom  use yarn add  ___ or npm install ___ --save",
          completed: false,
          project_id: 1
        },
        {
          name: "Design",
          description: "Start off creating the design",
          notes: "use the design template and try to make it pixel perfect",
          completed: false,
          project_id: 1
        }
      ]);
    });
};
