exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(tbl) {
    tbl.increments();

    tbl
      .string("description")
      .notNullable()
      .unique();

    tbl
      .string("notes")
      .notNullable()
      .unique();

    tbl
      .boolean("completed")
      .notNullable()
      .defaultTo(false);

    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
