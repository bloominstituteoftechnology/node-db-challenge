exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();
    tbl.string("description", 128).notNullable();
    tbl
      .string("completed", 128)
      .notNullable()
      .defaultTo(false);
    tbl
      .integer("actions_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("actions");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("projects");
};
