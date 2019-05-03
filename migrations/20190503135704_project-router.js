exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(tbl) {
    tbl.increments().unique();

    tbl.string("name", 128).notNullable();

    tbl.string("description").notNullable();
    tbl.boolean("completed").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
