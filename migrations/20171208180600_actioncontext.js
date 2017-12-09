
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actionContext', function(tbl) {
    tbl.increments('id');

    tbl
      .integer('actionId')
      .notNullable()
      .references('id')
      .inTable('actions')
      .onUpdate('CASCADE') // if a user's id is updated update this value
      .onDelete('CASCADE');
      
    tbl
      .integer('contextId')
      .notNullable()
      .references('id')
      .inTable('contexts')
      .onUpdate('CASCADE') // if a user's id is updated update this value
      .onDelete('CASCADE');

    tbl.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actionContext');
};