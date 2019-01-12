
exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", table => {
      table.increments();
      table.string("action_description").notNullable().unique();
      table.string("notes");
      table.boolean("action_completed");
      table.integer("project_id").unsigned();
      table.foreign("project_id").references("id").on("projects");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
