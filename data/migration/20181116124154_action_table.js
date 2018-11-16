exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(tbl) {
    tbl.increments();

    tbl.string("description").notNullable();

    tbl.string("notes").notNullable();

    tbl.boolean("completed");

    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIFExists("actions");
};
