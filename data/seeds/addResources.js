//delete and seed the resources to the db
exports.seed = function (knex) { 
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        { id: 1, name: 'schema', resource_description: 'find foreign keys for schema plan' },
        { id: 2, name: 'training kit', resource_description: 'use as reference' },
      ]);
    });
}