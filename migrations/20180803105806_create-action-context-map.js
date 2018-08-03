exports.up = knex => knex.schema.createTable('actionContextMap', (actionContextMap) => {
  actionContextMap
    .integer('actionId')
    .references('actions.id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  actionContextMap
    .integer('contextId')
    .references('contexts.id')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  actionContextMap
    .primary(['actionId', 'contextId']);
});

exports.down = knex => knex.schema.dropTableIfExists('actionContextMap');
