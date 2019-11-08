exports.up = function(knex) {
  return knex.schema
    .createTable("projects", table => {
      table.increments();
      table
        .string("name", 128)
        .notNullable()
        .unique();
      table.string("description", 128);
      table
        .boolean("completed")
        .notNullable()
        .defaultTo(0);
    })
    .createTable("tasks", table => {
      table.increments();
      table
        .string("name", 128)
        .notNullable()
        .unique();
      table.string("description", 128).notNullable();
      table.string("notes", 128);
      table
        .boolean("completed")
        .notNullable()
        .defaultTo(0);
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("resources", table => {
      table.increments();
      table
        .string("resource_name", 128)
        .notNullable()
        .unique();
      table.string("description", 128);
    })
    .createTable("project-resources", table => {
      table.increments();
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.unique(["project_id", "resource_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project-resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
