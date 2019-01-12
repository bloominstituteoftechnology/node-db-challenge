exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("projects", project => {
      project.increments().primary();
      project.text("name", 255).notNullable();
      project.text("project_description", 255).notNullable();
      project.boolean("project_is_complete");
    })
    .createTable("actions", action => {
      action.increments();
      action.text("action_description", 255).notNullable();
      action.text("action_notes", 255).notNullable();
      action.boolean("action_is_complete");
      action.integer("projectId").unsigned();
      action.foreign("projectId").references("projects.id");
    });
};

exports.down = function(knex, Promise) {
  // Rollback
  return Promise.all(["projects", "actions"]).map(table =>
    knex.schema.dropTableIfExists(table)
  );
};
