// a unique id.
// a context column ('home', 'office', 'at computer').

exports.up = function(knex, Promise) {
  return knex.schema.createTable('context', t => {
    t.increments('id');
    t.string('contexts', 32).unique('uq_context');
  });
};

exports.down = function(knex, Promise) {};
