exports.up = function(knex, Promise) {
    return knex.schema.createTable('projectactions', function(tbl) {
      tbl.increments('id'); // primary key
  
      tbl
        .integer('projectId')
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('actionId')
        .notNullable()
        .references('id')
        .inTable('actions')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.timestamp('createdAt').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projectactions');
  };