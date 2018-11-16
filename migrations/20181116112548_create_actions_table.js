
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
      table.increments();
      table.string('action_desc', 150).notNullable();
      table.string('action_notes', 500).notNullable();
      table.boolean('action_completed').notNullable();
      table.integer('project_id').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('actions');
};
