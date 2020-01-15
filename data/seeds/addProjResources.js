//delete then seed project_resources
exports.seed = function (knex) {

  return knex('projects_resources').truncate()
    .then(function () {

      return knex('projects_resources').insert([
        { id: 1, resource_id: 1, project_id: 1 },
        { id: 2, resource_id: 2, project_id: 2 }
      ]);
    });
};
