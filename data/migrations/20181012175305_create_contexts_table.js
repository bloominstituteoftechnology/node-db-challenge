exports.up = function(knex, Promise) {
  return knex.schema.createTable("contexts", function(table) {
    table.increments();
    table.string("context", 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("contexts");
};
