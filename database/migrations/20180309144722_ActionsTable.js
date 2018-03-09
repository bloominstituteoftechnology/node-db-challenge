exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', table => {
      table.increments('id').primary();
      table.string('description').notNullable();
      table.string('notes').notNullable();
      table.boolean('isComplete').default(false);
      table.timestamp('createdAt').default(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
