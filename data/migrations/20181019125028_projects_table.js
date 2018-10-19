exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(tbl) {
    // primary key called id
    tbl.increments(); // by default creates an id field that auto increments

    tbl.string("name", 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  // rollback
  return knex.schema.dropTableIfExists("projects");
};
