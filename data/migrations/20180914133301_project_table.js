exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(projects) {
    projects.increments();
    projects.string("name", 128).notNullable();
    projects.string("description").notNullable();
    projects.boolean("complete?").defaultTo(false);
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
