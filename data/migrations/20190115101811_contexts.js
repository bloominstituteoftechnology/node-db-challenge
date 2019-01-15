
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', table => {
      table.increments();
      table.text('description').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contexts');
};
