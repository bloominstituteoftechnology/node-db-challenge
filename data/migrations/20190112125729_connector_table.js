
exports.up = function(knex, Promise) {
  return knex.schema.createTable('connector', table => {
    table.increments();
    table.string('connect',500).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('connector');
};
