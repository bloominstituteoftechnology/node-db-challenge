exports.up = function (knex) {
  return knex.schema
    .createTable("project", (table) => {
      table.increments();
      table.string("name", 255).notNullable().index();
      table.text("description");
      table.boolean("completed").notNullable().defaultTo(false);
    })
    .createTable("task", (table) => {
      table.increments();
      table
        .integer("project_id")
        .unsigned()
        .references("project.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("description", 255).notNullable();
      table.text("notes");
      table.boolean("completed").notNullable().defaultTo(false);
    })
    .createTable("resource", (table) => {
      table.increments();
      table.string("name", 255).notNullable().unique();
      table.text("description");
    })
    .createTable("project_resource", (table) => {
      table.increments();
      table
        .integer("project_id")
        .unsigned()
        .references("project.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE"); //if project is deleted, project_resource record is deleted, resource is set free
      table
        .integer("resource_id")
        .unsigned()
        .references("resource.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT"); //if the resourse in use for projects, it cannot be deleted from db
      table.unique(["project_id", "resource_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resource")
    .dropTableIfExists("resource")
    .dropTableIfExists("task")
    .dropTableIfExists("project");
};
