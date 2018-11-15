exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(p) {
    p.increments();

    p.string("name", 128).notNullable();
    p.text("description").notNullable();
    p.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
