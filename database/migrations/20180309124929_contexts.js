exports.up = function(knex, Promise) {
  return knex.schema.createTable('context', ctxt => {
    ctxt.increments();
    ctxt.string('context');

    ctxt.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('context');
};
