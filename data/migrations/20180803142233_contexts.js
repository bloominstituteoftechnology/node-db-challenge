exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', function(t) {
    t.increments(); // PK defaults to 'id'
    t.string('name')
      .unique()
      .notNullable();
    t.integer('created_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contexts');
};
