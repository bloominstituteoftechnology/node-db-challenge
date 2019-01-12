exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", table => {
    table.increments();
    table.string("description").notNullable();
    table.string("notes");
    table.integer("completed").defaultTo(0);
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
