//delete and seed the resources to the db
exports.seed = function (knex) { 
  return knex('project_resources').truncate()
    .then(function () {
      return knex('project_resources').insert([
        { id: 1, name: 'schema', resources_description: 'find foreign keys for schema plan', project_id: 1, completed: 0 },
        { id: 2, name: 'training kit', resources_description: 'use as reference', project_id: 2, completed: 0 },
      ]);
    });
}