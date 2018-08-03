exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions_contexts', function(t) {
    t.increments(); // PK defaults to 'id'
    t.integer('a_id') // FK to actions
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('actions')
      .onUpdate('RESTRICT')
      .onDelete('RESTRICT');
    t.integer('c_id') // FK to contexts
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('contexts')
      .onUpdate('RESTRICT')
      .onDelete('RESTRICT');
    t.integer('created_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions_contexts');
};
