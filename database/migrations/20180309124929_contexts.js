exports.up = function(knex, Promise) {
  return knex.schema.createTable('context', ctxt => {
    ctxt.increments();
    ctxt.enu('context'[('home', 'office', 'at computer')]);
    ctxt.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('context');
};
