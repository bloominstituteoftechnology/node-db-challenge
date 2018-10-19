exports.seed = function(knex, Promise) {
  return knex("actions")
    .truncate()
    .then(function() {
      return knex("actions").insert([
        {
          project_id: 1,
          description: "Open Visual Studio Code.",
          notes: "Ensure you are running the latest version.",
          completed: "false"
        },
        {
          project_id: 1,
          description: "Fire up your terminal.",
          notes: "Terminal will run a server.",
          completed: "false"
        },
        {
          project_id: 1,
          description: "Head over to project repo instructions.",
          notes: "Read instructions carefully and thoroughly.",
          completed: "false"
        },
        {
          project_id: 1,
          description: "Initialize a yarn file.",
          notes: "Run yarn init -y",
          completed: 0
        }
      ]);
    });
}
