exports.up = function(knex, Promise) {
  return knex.schema.createTable('projectContexts', (t) => {
    t.increments('id').unsigned().primary();
    t.integer('projectId').references('id').inTable('contexts');
    t.integer('contextId').references('id').inTable('contexts');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projectContexts');  
};
