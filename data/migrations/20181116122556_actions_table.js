exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(tbl) {
    tbl.increments();
    tbl.string("description");
    tbl.string("notes");
    tbl
      .integer("project")
      .unsigned()
      .references("id")
      .inTable("actions");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
