
exports.seed = function(knex, Promise) {
  return knex("actions")
  .truncate()
  .then(function () {
    return knex("actions").insert([
      { complete: false, description: 'fork', project_id: 1},
      { complete: true, description: 'clone', project_id: 1},
      { complete: false, description: 'mvp 1', project_id: 1},
      { complete: false, description: 'mvp 2', project_id: 1},
      { complete: true, description: 'mvp 3', project_id: 1},
      { complete: false, description: 'stretch 1', project_id: 2},
      { complete: true, description: 'stretch 2', project_id: 2},
    ])
  })
};
