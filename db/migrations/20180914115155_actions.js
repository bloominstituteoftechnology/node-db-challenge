exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tbl => {
    tbl.increments();
    tbl
      .integer("project_id")
      .notNullable()
      .references("id")
      .inTable("projects");

    tbl.string("description", 128).notNullable();
    tbl.string("notes", 1000).notNullable();
    tbl.string("completed", 128).defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
