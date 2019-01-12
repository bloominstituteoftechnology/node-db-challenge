
exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", table => {
    table.increments("id");
    table.integer("project_id").unsigned().notNullable();
    table.foreign("project_id").references("id").on("projects");
    table.text("action_description").notNullable();
    table.text("action_notes");
    table.boolean("action_completed").notNullable().defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
