
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actioncontexts', table => {
      table.increments();
      table.text('action_description').notNullable();
      table.integer('action_id').unsigned();
      table.foreign('action_id').references('id').on('actions');
      table.text('context_description').notNullable();
      table.integer('context_id').unsigned();
      table.foreign('context_id').references('id').on('contexts');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actioncontexts');
};
