exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", table => {
    table.increments().primary();
    table.string("name").notNullable();
    table.string("description");
    table.boolean("complete");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
