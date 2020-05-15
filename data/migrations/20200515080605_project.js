exports.up = function (knex) {
  return knex.schema
    .createTable("project", (project) => {
      // suppliers.uuid('id').primary();
      project.increments();

      project.string("name", 255).notNullable().unique();
      project.string("descriptions", 255);
      project.integer("completed").defaultTo(0);
    })
    .createTable("tasks", (tasks) => {
      tasks.increments();

      tasks.string("descriptions", 255).notNullable();
      tasks.string("notes", 255);
      tasks.integer("completed").defaultTo(0);

      tasks
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
    .createTable("resources", (resources) => {
      // suppliers.uuid('id').primary();
      resources.increments();

      resources.string("name", 255).notNullable().unique();
      resources.string("descriptions", 255);
    })
    .createTable("project_resources", (project_resources) => {
      // suppliers.uuid('id').primary();
      project_resources.increments();

      project_resources
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");

      project_resources
        .integer("resources_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("project");
};
