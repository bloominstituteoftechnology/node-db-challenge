exports.seed = function(knex) {
  return knex('project-resources').insert([
    { project_id: 1, resource_id: 1 },
    { project_id: 1, resource_id: 2 },
    { project_id: 2, resource_id: 1 },
    { project_id: 2, resource_id: 3 },
    { project_id: 3, resource_id: 1 },
    { project_id: 3, resource_id: 2 },
    { project_id: 3, resource_id: 3 },
    { project_id: 4, resource_id: 1 },
  ]);
};