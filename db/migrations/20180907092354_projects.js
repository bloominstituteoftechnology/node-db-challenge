exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(table) {
    table.increments("project_id");

    table
      .string("project_name", 50)
      .notNullable()
      .unique("uq_project_name");

    table
      .string("project_description", 50)
      .notNullable()
      .unique("uq_project_description");

    table.boolean("project_completed").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("projects");
};
