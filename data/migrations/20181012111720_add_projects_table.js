exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(tbl) {
    tbl.increments();

    tbl.string("name").notNullable();

    tbl.unique("name");

    tbl.string("description").notNullable();

    tbl.boolean("complete");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
