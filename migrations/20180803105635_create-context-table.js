exports.up = knex => knex.schema.createTable('contexts', (contexts) => {
  contexts.increments('id').primary();
  contexts.text('name').unique();
  contexts.text('description');
});

exports.down = knex => knex.schema.dropTableIfExists('contexts');
