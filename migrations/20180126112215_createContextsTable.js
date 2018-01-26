
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', function(tbl) {
      tbl.increments('id'); // primary key
      tbl.string('context', 128).notNullable();
      tbl
      .integer('projectId')
      .notNullable()
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
      tbl.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contexts');
};
