//delete then seed project_resources
exports.seed = function (knex) {
  return knex('project_resources').truncate()
    .then(function () {
      return knex('project_resources').insert([
        { id: 1, project_resource_id: 1, project_id: 1 },
        { id: 2, project_resource_id: 2, project_id: 2 }
      ]);
    });
};
