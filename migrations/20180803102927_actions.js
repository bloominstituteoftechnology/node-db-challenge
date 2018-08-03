exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", table => {
    table.increments();
    table
      .integer("project_id")
      .unsigned()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("description").notNullable();
    table.string("notes");
    table.boolean("completed");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
