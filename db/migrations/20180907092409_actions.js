exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(table) {
    table.increments("action_id");

    table
      .string("action_description", 50)
      .notNullable()
      .unique("uq_action_description");

    table
      .string("action_notes", 120)
      .notNullable()
      .unique("uq_action_notes");

    table.boolean("action_completed").notNullable();

    // foreign key
    table
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("actions");
};
