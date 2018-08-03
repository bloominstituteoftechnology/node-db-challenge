exports.up = knex => knex.schema.createTable('actions', (actions) => {
  actions.increments('id').primary();
  actions
    .integer('projectId')
    .references('projects.id')
    .onUpdate('CASCADE')
    .onDelete('SET NULL');
  actions.text('name');
  actions.text('description');
  actions.text('notes');
  actions.boolean('completed');
});

exports.down = knex => knex.schema.dropTableIfExists('actions');
