
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
    table.increments();
    table.string('action_description')
      .notNullable();
    table.string('action_notes')
      .notNullable();
    table.boolean('action_completed');
    table.integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
