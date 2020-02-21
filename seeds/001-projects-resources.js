
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects_resources').del()
    .then(function () {
      // Inserts seed entries
      const project_resources = [
        {project_id:1, resource_id: 1},
        {project_id:1, resource_id: 2},
        {project_id:2, resource_id: 1},
        {project_id:3, resource_id: 1}
      ]
      
      return knex('projects_resources').insert(project_resources);
    });
};
