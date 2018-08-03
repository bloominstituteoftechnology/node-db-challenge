exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(t) {
    t.increments(); // PK defaults to 'id'
    t.string('notes').notNullable();
    t.string('description').notNullable();
    t.boolean('done').notNullable();
    t.integer('p_id') // FK to projects
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('RESTRICT')
      .onDelete('RESTRICT');
    t.integer('created_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
