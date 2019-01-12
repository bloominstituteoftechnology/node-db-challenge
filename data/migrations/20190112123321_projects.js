
exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", table => {
    table.increments("id");
    table.string("project_name").notNullable().unique();
    table.text("project_description");
    table.boolean("project_completed").notNullable().defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
