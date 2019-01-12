
exports.seed = function(knex, Promise) {
  return knex("actions")
    .truncate()
    .then(function() {
      return knex("actions").insert([
        {
          description: "Action 1",
          notes: "Lorem ipsum",
          complete: false,
          project_id: 1
        },
        {
          description: "Action 2",
          notes: "Lorem ipsum",
          complete: false,
          project_id: 1
        },
        {
          description: "Action 3",
          notes: "Lorem ipsum",
          complete: false,
          project_id: 2
        },
        {
          description: "Action 4",
          notes: "Lorem ipsum",
          complete: false,
          project_id: 3
        },
        {
          description: "Action 5",
          notes: "Lorem ipsum",
          complete: false,
          project_id: 4
        },
        {
          description: "Action 6",
          notes: "Lorem ipsum",
          complete: false,
          project_id: 5
        }
      ]);
    });
};
