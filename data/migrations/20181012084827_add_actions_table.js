exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", table => {
    table.increments().primary();
    table
      .integer("project_id")
      .unsigned()
      .references("id")
      .inTable("projects");
    table.string("description").notNullable();
    table.string("notes");
    table.boolean("complete");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
