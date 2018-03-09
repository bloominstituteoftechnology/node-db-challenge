
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', table => {
    table.increments();
    table.string('context').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contexts');
};
