
exports.up = function(knex, Promise) {
 return knex.schema.createTable('projects', function (table) {
    table.increments().primary();
    table.string('name').notNullable();
    table.text('description').notNullable();
    table.boolean('complete').defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");

};
