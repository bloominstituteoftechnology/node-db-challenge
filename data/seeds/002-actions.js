exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          project_id: "1",
          description: "building out the case",
          notes: "get case, cut out screen space"
        },

        {
          project_id: "1",
          description: "parts",
          notes: "-buy screen, -buy control board"
        },

        {
          project_id: "2",
          description: "build node server",
          notes: "yarn install, then install dev"
        },
        {
          project_id: "2",
          description: "build node server",
          notes: "yarn install, then install dev"
        },
        {
          project_id: "3",
          description: "buy ingridents",
          notes: "buns, patties, cheese"
        }
      ]);
    });
};
