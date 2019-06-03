exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
    table.increments('id');
    table.string('description').notNullable();
    table.text('notes').notNullable();
    table.boolean('is_completed').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
