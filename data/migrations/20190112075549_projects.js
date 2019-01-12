exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", projects => {
    projects.increments();
    projects.string("project_name").notNullable;
    projects.string("description", 500).notNullable;
    projects.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
