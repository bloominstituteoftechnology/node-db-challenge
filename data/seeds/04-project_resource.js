exports.seed = function(knex) {
    return knex('project_resource').insert([
      {project_id: 1, resource_id:1},
      {project_id: 1, resource_id:2},
      {project_id: 2, resource_id:1},
      {project_id: 2, resource_id:2}
    ]);
  };