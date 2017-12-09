exports.up = function(knex, Promise) {
    return knex.schema.createTable('actioncontexts', function(tbl) {
      tbl.increments('id'); // primary key
  
      tbl
        .integer('actionId')
        .notNullable()
        .references('id')
        .inTable('actions')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('contextId')
        .notNullable()
        .references('id')
        .inTable('contexts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actioncontexts');
  };