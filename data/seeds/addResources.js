//delete and seed the resources to the db
exports.seed = function (knex) { 
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        { id: 1, name: 'schema', resource_description: 'find foreign keys for schema plan', project_id: 1, completed: 0 },
        { id: 2, name: 'training kit', resource_description: 'use as reference', project_id: 2, completed: 0 },
      ]);
    });
}