exports.up = function(knex) {
  return knex.schema.createTable("Tasks", tbl => {
    tbl.increments();

    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects");

    tbl.string("description", 255).notNullable();

    tbl.string("notes", 255);

    tbl.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tasks");
};
