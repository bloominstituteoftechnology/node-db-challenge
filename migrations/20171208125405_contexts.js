
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contexts', function(tbl) {
    tbl.increments('id'); //Primary Key

    tbl
      .integer('projectId')
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE') // if a user's id is updated update this value
      .onDelete('CASCADE');

    tbl.string('context').notNullable();
    tbl.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contexts');
};
