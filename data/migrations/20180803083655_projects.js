exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(t) {
    t.increments(); // PK defaults to 'id'
    t.string('name')
      .unique()
      .notNullable();
    t.string('description').notNullable();
    t.boolean('done').notNullable();
    t.integer('created_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
