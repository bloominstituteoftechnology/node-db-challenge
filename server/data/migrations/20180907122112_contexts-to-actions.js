exports.up = (knex, Promise) => {
  return knex.schema.createTable('contexts-to-actions', t => {
    t.increments();
    t.integer('action_id').references('actions.id');
    t.integer('context_id').references('contexts.id');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('contexts-to-actions');
};
