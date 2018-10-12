
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(actions) {
      actions.increments();

      actions
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects');

      actions.text('description').notNullable();

      actions.text('notes');

      actions.boolean('completed').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
};
