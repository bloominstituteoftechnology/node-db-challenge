
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts_to_actions', function(tbl) {
    tbl.increments();

    tbl
      .integer('action_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('actions')
      .onDelete('CASCADE');

    tbl
      .integer('context_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('contexts')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contexts_to_actions')
};
