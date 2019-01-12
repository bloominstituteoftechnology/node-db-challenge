
exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", table => {
      table.increments();
      table.string("project_name").notNullable();
      table.string("decription").notNullable();
      table.boolean("completed");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
