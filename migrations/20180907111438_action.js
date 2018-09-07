
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function (table) {
    table.increments().primary();
    table.text('note').notNullable();
    table.text('description').notNullable();
    table.boolean('complete').defaultTo(false);
    table.integer('project_id').references('id').inTable('projects');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");

};
