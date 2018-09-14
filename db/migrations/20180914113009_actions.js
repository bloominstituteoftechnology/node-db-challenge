exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(tbl) {
    tbl.increments();
    tbl
      .string("action_description", 128)
      .notNullable()
      .unique("description");
    tbl
      .string("action_notes", 128)
      .notNullable()
      .unique("uq_notes");
    tbl
      .string("action_completed")
      .notNullable();
    // tbl
    //   .integer()
    //   .unsigned()
    //   .notNullable()
    //   .reference("id")
    //   .inTable("projects");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("actions");
};
