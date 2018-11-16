
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(actions) {
    actions.increments().primary;
    actions.integer('projectId').references('projects.id');
    actions.text('name').notNullable();
    actions.text('description').notNullable();
    actions.boolean('completed').defaultTo(false);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
