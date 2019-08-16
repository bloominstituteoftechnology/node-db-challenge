exports.up = function(knex) {
  return knex.schema
    .createTable("project", tbl => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("description", 255);
      tbl.boolean("completed").defaultTo(false);
    })
    .create("resource", tbl => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("description", 255);
    })
    .createTable("task", tbl => {
      tbl.increments();
      tbl.string("description", 255).notNullable();
      tbl.string("notes", 1000);
      tbl.boolean("completed").defaultTo(false);
    })
    .createTable("project_resource", tbl => {});
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_task")
    .dropTableIfExists("project_resource")
    .dropTableIfExists("task")
    .dropTableIfExists("resource")
    .dropTableIfExists("project");
};
