exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(tbl) {
    tbl.increments();

    tbl.string("name", 50).notNullable();

    tbl.string("description", 400);

    tbl.boolean("completed").defaultTo(false);

    tbl.unique('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
