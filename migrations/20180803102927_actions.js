exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", table => {
    table.increments();
    table
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("description").notNullable();
    table.text("notes").notNullable();
    table.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
