exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(table) {
    // pk
    table.increments();
    // other fields
    table
      .string("description")
      .notNullable()
      .defaultTo("Not Provided");
    table
      .string("notes")
      .notNullable()
      .defaultTo("Not Provided");
    // foreign key
    table
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  // drop projects table
  return knex.schema.dropTableIfExists("actions");
};
