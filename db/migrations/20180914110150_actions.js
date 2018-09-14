exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments();

    tbl.string("description", 120).notNullable();

    tbl.string("notes", 1200);

    tbl.bool("completed").notNullable();

    tbl
      .int("project_id")
      .notNullable()
      .unsigned()
      .references("projects.id")
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExsists("actions");
};
