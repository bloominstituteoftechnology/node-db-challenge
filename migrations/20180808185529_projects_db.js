exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", projects => {
    projects.increments();

    projects.string("name").notNullable();
    projects.text("description").notNullable();
    projects.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return dropTableIfExists("projects");
};
