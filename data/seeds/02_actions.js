
exports.seed = function(knex, Promise) {
  return knex('actions')
    .truncate()
    .then(function () {
      return knex('actions').insert([
        {
          "project_id": 1,
          "description": "Open Visual Studio Code.",
          "notes": "Make sure to have the latest version.",
          "completed": "false"
        },
        {
          "project_id": 1,
          "description": "Load up the terminal.",
          "notes": "Terminal will run a server.",
          "completed": "false"
        },
        {
          "project_id": 1,
          "description": "Read project repository instructions.",
          "notes": "Read instructions carefully.",
          "completed": "false"
        },
        {
          "project_id": 1,
          "description": "Initialize an npm file.",
          "notes": "Run yarn init -y",
          "completed": 0
        }
      ]);
    });
};
