// PROJECT - id, name, description
// TASK - id, description, notes, project_id
// RESOURCES - id, name
// PROJECT-RESOURCES - project_id, resource_id, id

exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("description", 128);
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("description", 128).notNullable();
      tbl.string("notes", 128);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("description", 128);
    })
    .createTable("project-resources", tbl => {
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources");
      tbl.primary(["project_id", "resource_id"]);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("project-resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
