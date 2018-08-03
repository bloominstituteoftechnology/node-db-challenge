exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects_actions', function(t) {
    t.increments(); // PK defaults to 'id'
    t.integer('projectFK').notNullable();
    t.integer('actionFK').notNullable();
    t.integer('created_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects_actions');
};
