exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", table => {
    table.increments();
    table.string("name");
    table.unique("name");
    table.string("description");
    table.boolean("completed");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("projects");
};
