exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments().unique(); // id
    tbl.string("name").notNullable();
    tbl.string("description").notNullable();
    tbl.boolean("Completed").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
