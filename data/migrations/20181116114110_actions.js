exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", table => {
    table.increments(); // primary key
    table.string("description", 255).notNullable();
    table.string("notes", 1000).notNullable();
    table.boolean("completed").notNullable();
    table
      .integer("project_id")
      .unsigned()
      .references("id")
      .inTable("projects");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
