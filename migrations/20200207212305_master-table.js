exports.up = function(knex) {
  return knex.schema
    .createTable("project", tbl => {
      tbl.increments();
      tbl.integer("project_id")
        .notNullable()
        .unique();
      tbl.text("project_name", 128)
      .notNullable();
      tbl.text("project_description", 128);
      tbl.integer("resourceId")
        .unique()
        .references("resource_id")
        .inTable("resource")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.integer("taskId", 128).unique()
      .references("task_id")
      .inTable("task")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
      tbl.boolean("false")
        .notNullable();
    })
    .createTable("resource", tbl => {
      tbl.increments();
      tbl.integer("resource_id")
        .notNullable()
        .unique()
        .references("resourceId")
        .inTable("project")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.text("resource_name", 128)
        .notNullable()
        .unique();
      tbl.text("resource_description", 128);
    })
    .createTable("task", tbl => {
      tbl.increments();
      tbl.integer("task_id")
        .notNullable()
        .unique();
      tbl.text("task_description", 128)
        .notNullable();
        tbl.text("projectname", 128)
        .unique()
        .notNullable()
        .references("project_name")
        .inTable("project")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        tbl.text("projectdescription", 128)
        .unique()
        .notNullable()
        .references("project_description")
        .inTable("project")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.text("notes", 128);
      tbl.boolean("false");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("task")
    .dropTableIfExists("resource")
    .dropTableIfExists("project");
};
