exports.up = function(knex, Promise) {
  return knex.schema.createTable('ActionsContexts', function(tbl) {
    tbl.increments('id'); // primary key

    tbl
      .integer('actionId')
      .notNullable()
      .references('id')
      .inTable('Actions')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('contextId')
      .notNullable()
      .references('id')
      .inTable('Contexts')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ActionsContexts');
};
