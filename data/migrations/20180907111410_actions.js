exports.up = (knex, Promise) => {
  return knex.schema.createTable('actions', t => {
    t.increments();
    t.string('description').notNullable();
    t.string('notes');
    t.boolean('completed').defaultTo(0);
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('actions');
};
