exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments();
    tbl
      .integer("project_id")
      .references("projects.id")
      .notNullable();
    tbl.string("description", 100).notNullable();
    tbl.string("additional_notes", 200);
    tbl.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
