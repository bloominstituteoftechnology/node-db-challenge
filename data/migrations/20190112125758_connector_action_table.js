
exports.up = function(knex, Promise) {
  return knex.schema.createTable('connector_actions', table => {
    table.increments();
    table.integer('action_id').notNullable().unsigned();
    table.foreign('action_id').references('id').on('actions');
    table.integer('connector_id').notNullable().unsigned();
    table.foreign('connector_id').references('id').on('connector');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('connector_actions');
};
