exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(tbl) {
    tbl.increments();
    tbl.string("name", 255).notNullable();
    tbl.text("description", 255).notNullable();
    tbl.boolean("complete").defaultTo(false);

    //tbl.unique("name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
