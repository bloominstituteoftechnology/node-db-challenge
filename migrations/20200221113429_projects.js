exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl
        .string("project", 30)
        .notNullable()
        .unique();
      tbl.string("projectDescription", 256);
      tbl.boolean("completed").defaultTo(false);
    })

    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("task", 30).notNullable();
      tbl.string("taskDescription").notNullable();
      tbl
        .integer("projectId")
        .notNullable()
        .references("projects.id");
      tbl.boolean("completed").defaultTo(false);
    })

    .createTable("resources", tbl => {
      tbl.increments();
      tbl.string("resource", 50).notNullable();
      tbl.string("resourceDescription");
    })
    .createTable("projectResources", tbl => {
      tbl.increments();

      tbl
        .integer("projectId")
        .notNullable()
        .references("project.id");
      tbl
        .integer("resourceId")
        .notNullable()
        .references("resources.id");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("projectResources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
